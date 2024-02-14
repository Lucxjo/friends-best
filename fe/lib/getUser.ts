import { prisma } from "~/server"

export const getUserByDiscordId = async (discord_id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            discord_id
        }
    })

    return user
}