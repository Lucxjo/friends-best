<template>
    <div>
        <div class="grid h-screen place-items-center">
        <div class="grid place-items-center">
        <h1 class="text-6xl font-bold underline">Vänner Bästa</h1>
        <div class="grid grid-cols-2 mt-10">
            <LLink v-for="link in links" :to="link.href" :title="link.title" />
        </div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
const links: Array<{href: string, title: string}> = [
    {
        href: "/utilities/birthdays",
        title: "Birthdays"
    },
    {
        href: "/utilities/time",
        title: "Time"
    },
]
</script>