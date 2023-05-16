<template>
    <div class="grid h-screen place-items-center">
        <div class="grid place-items-center">
        <h1 class="text-6xl font-bold underline">Vänner Bästa | Login</h1>
        <div class="mt-10 mx-4 place-items-center">
            <a href="https://discord.com/api/oauth2/authorize?client_id=1105533416377688174&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fv1%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.members.read" >Login with Discord</a>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>