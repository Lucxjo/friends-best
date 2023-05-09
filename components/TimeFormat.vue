<script setup lang="ts">
import { defineComponent } from 'vue'
type TimeFormatProps = {
    dateStyle: 'full' | 'long' | 'medium' | 'short',
    timeStyle: 'full' | 'long' | 'medium' | 'short',
    hour12: boolean
}

const props = defineProps<
    {
        format: TimeFormatProps,
        dFormat: string,
        crntTime: number
    }
    >()
</script>

<template>
    <code>
        {{ `<t:${Math.floor(crntTime / 1000)}:${props.dFormat}>` }}
	</code>
	<span>
		to get
		<code>
            {{Intl.DateTimeFormat(Intl.Locale, format).format(crntTime).replace(" at ", " ") + ' '}}
        </code>
    </span>
</template>