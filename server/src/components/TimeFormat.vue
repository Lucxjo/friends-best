<script setup lang="ts">
import { defineComponent } from 'vue'

type TimeFormatProps = {
    day: string | undefined,
    month: string | undefined,
    year: string | undefined,
    hour: string | undefined,
    minute: string | undefined,
    second: string | undefined,
    weekday: string | undefined,
}

const props = defineProps({
    formats: {
        type: Array<TimeFormatProps>,
        required: true,
    },
    dFormat: {
        type: String,
        required: true,
    },
})

const crntTime = Date.now();
</script>

<template>
    <code>
        {{ `<t:${Math.floor(crntTime / 1000)}:${props.dFormat}>` }}
	</code>
	<span>
		to get
		<code>
            <span v-for="format in props.formats" :key="Math.floor(Math.random()*1000)">
                {{Intl.DateTimeFormat(Intl.Locale, format).format(crntTime) + ' '}}
            </span>
        </code>
    </span>
</template>