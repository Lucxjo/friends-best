<template>
    <NuxtLink :to="to" class="bg-gray-50 hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 m-4 py-5 px-10 rounded-3xl shadow-lg hover:shadow-xl">{{ title }} →</NuxtLink>
</template>

<script setup lang="ts">

defineProps({
    to: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})

</script>