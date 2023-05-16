<script setup lang="ts">
const router = useRouter()
definePageMeta({
    middleware: 'auth'
})

async function logout() {
    router.push('/login')
}
</script>

<template>
    <div class="grid h-screen place-items-center">
        <div class="grid place-items-center">
        <h1 class="text-6xl font-bold underline">Vänner Bästa | Dash</h1>
        <div class="mt-10 mx-4 place-items-center">
            <p>Logged in as {{ user?.user_metadata?.full_name }}</p>
            <button @click="logout" >Logout</button>
        </div>
        </div>
    </div>
</template>