import { runtimeConfig, prisma } from '~/server/index'
import * as jose from 'jose'
import { z } from 'zod';

const PartialUserGuildSchema = z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string().nullable(),
    owner: z.boolean(),
    permissions: z.number(),
    features: z.array(z.string()),
});

const UserGuildSchema = z.object({
    avatar: z.string().nullable(),
    communication_disabled_until: z.string().nullable(),
    flags: z.number(),
    joined_at: z.string(),
    nick: z.string().nullable(),
    pending: z.boolean(),
    premium_since: z.string().nullable(),
    roles: z.array(z.string()),
    user: z.object({
        id: z.string(),
        username: z.string(),
        global_name: z.string().nullable(),
        avatar: z.string().nullable(),
        discriminator: z.string(),
        public_flags: z.number(),
        avatar_decoration: z.string().nullable(),
    }),
    mute: z.boolean(),
    deaf: z.boolean(),
});

export default defineEventHandler(async (event) => {
    const { code } = getQuery(event)
    let create_user = false

    if (!code) {
        return sendRedirect(event, '/')
    }

    const response = await fetch("https://discord.com/api/oauth2/token", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        client_id: '1105533416377688174',
        client_secret: '7FdJcfSNvhXpsR_46N-ZnbNoyjV3bl1o',
        grant_type: 'authorization_code',
        code: (code as string),
        redirect_uri: 'http://localhost:3000/auth/v1/callback'
    })
    });

    const data: {
        access_token: string,
        expires_in: number,
        refresh_token: string,
        scope: string,
        token_type: string
    } = await response.json();

    const userReq = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `${data.token_type} ${data.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/x-www-form-urlencoded'
        }
    });

    const user: {
        id: string,
        username: string,
        discriminator: string,
    } = await userReq.json();

    create_user = await prisma.user.findUnique({
        where: {
            discord_id: user.id
        }
    }).then((u) => create_user = !u)

    const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
            Authorization: `${data.token_type} ${data.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/x-www-form-urlencoded'
        }
    }).then(async (res) => PartialUserGuildSchema.array().parse(await res.json()));

    const guild = guilds.find((g) => g.id === runtimeConfig.discordGuildId);

    if (guild) {
        prisma.user.update({
            where: {
                discord_id: user.id
            },
            data: {
                is_member: true
            }
        })
        const member = await fetch(`https://discord.com/api/users/@me/guilds/${guild.id}/member`, {
            headers: {
                Authorization: `${data.token_type} ${data.access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/x-www-form-urlencoded'
            }
        }).then((res) => res.json()).then((res) => UserGuildSchema.parse(res))

        if (member.roles.find((r) => r === runtimeConfig.discordAdminRoleId)) {
            console.log('admin')

            if (create_user) {
                prisma.user.create({
                    data: {
                        discord_id: user.id,
                        name: user.username + '#' + user.discriminator,
                        is_admin: true,
                        is_staff: true,
                        is_member: true
                    }
                })
            } else {
                prisma.user.update({
                    where: {
                        discord_id: user.id
                    },
                    data: {
                        is_admin: true,
                        is_staff: true,
                        is_member: true
                    }
                })
            }
        } else if (member.roles.find((r) => r === runtimeConfig.discordStaffRoleId)) {
            console.log('staff')

            if (create_user) {
                prisma.user.create({
                    data: {
                        discord_id: user.id,
                        name: user.username + '#' + user.discriminator,
                        is_admin: false,
                        is_staff: true,
                        is_member: true
                    }
                })
            } else {
                prisma.user.update({
                    where: {
                        discord_id: user.id
                    },
                    data: {
                        is_admin: false,
                        is_staff: true,
                        is_member: true
                    }
                })
            }
        } else {
            if (create_user) {
                prisma.user.create({
                    data: {
                        discord_id: user.id,
                        name: user.username + '#' + user.discriminator,
                        is_admin: false,
                        is_staff: false,
                        is_member: true
                    }
                })
            } else {
                prisma.user.update({
                    where: {
                        discord_id: user.id
                    },
                    data: {
                        is_admin: false,
                        is_staff: false,
                        is_member: true
                    }
                })
            }
        }
    } else {
        console.log('not member')

        if (create_user) {
            prisma.user.create({
                data: {
                    discord_id: user.id,
                    name: user.username + '#' + user.discriminator,
                    is_admin: false,
                    is_staff: false,
                    is_member: false
                }
            })
        } else {
            prisma.user.update({
                where: {
                    discord_id: user.id
                },
                data: {
                    is_admin: false,
                    is_staff: false,
                    is_member: false
                }
            })
        }
    }

    const secret = new TextEncoder().encode(runtimeConfig.jwtSecret)

    const token = await new jose.SignJWT({ sub: user.id })
        .setProtectedHeader({ alg: 'HS512' })
        .setIssuedAt()
        .setIssuer('https://vannerba.st')
        .setAudience('https://vannerba.st')
        .setExpirationTime('5h')
        .sign(secret)

    setCookie(event, 'token', token)

    return sendRedirect(event, '/dash')
})