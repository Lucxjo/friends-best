<template>
    <div class="grid h-screen place-items-center">
        <div class="grid place-items-center">
        <h1 class="text-6xl font-bold underline">Vänner Bästa</h1>
        <div class="mt-10 mx-4 place-items-center">
            <p>A Young Royals fan website with links to different discussion spaces.</p>
            <strong class="pt-5">Season 2 is out now!</strong>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 mt-10">
            <LLink v-for="link in links" :to="link.href" :title="link.title" />
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const links: Array<{href: string, title: string}> = [
    {
        href: "https://netflix.com",
        title: "Netflix"
    },
    {
        href: "https://discord.gg/youngroyals",
        title: "Discord"
    },
    {
        href: "https://reddit.com/r/youngroyals",
        title: "Reddit"
    },
    {
        href: "https://www.talkable.com/x/IchxFl",
        title: "Babbel (ref)"
    },
    {
        href: "/utilities",
        title: "Discord Utilities"
    }
]
</script>