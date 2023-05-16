<template>
    <div class="w-screen grid-cols-4 grid-flow-col">
        <div class="px-4 col-span-1" v-if="user">
            <span>Hej {{ user.user_metadata.full_name }} </span> |
            <button class="underline" @click="logout" >Logout</button>
        </div>
        <div class="nav" v-if="links">
            <a href="/">Home</a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    links: {
        type: Boolean,
        default: true
    }
})

</script>

<style>
nav {
	margin: 0 auto;
	position: -webkit-sticky;
	position: sticky;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>