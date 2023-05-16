const url = `https://discord.com/api/oauth2/authorize?client_id=1105533416377688174&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fv1%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.members.read`

export default defineEventHandler((event) => {
    return sendRedirect(event, url)
})