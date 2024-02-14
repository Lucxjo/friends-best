<script setup lang="ts">
import { defineProps } from 'vue';

const crntTime = Date.now();
</script>

<template>
    <p>The current time in Unix Epoch: <code>{{ Math.floor(crntTime / 1000) }}</code> <br /> or <code>{{crntTime}}</code> in Unix millis</p>
</template>