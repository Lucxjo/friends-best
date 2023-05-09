<template>
    <div>
        <div class="grid h-screen place-items-center">
        <div class="grid place-items-center">
        <h1 class="text-6xl font-bold underline p-4">Time Utilities</h1>
        <p class="p-4" >Your current timezone: {{ timezone }}</p>
        <p>
            The current time in Unix Epoch: <code>{{ Math.floor(unix/1000) }}</code> <br />
            or <code>{{ unix }}</code> in milliseconds.
        </p>

        <p class="p-4">
            To format the time for Discord, you can use: <br />
            <TimeFormat :crnt-time="unix" d-format="f" :format="{
                dateStyle: 'long',
                timeStyle: 'short',
                hour12: false
            }"/> <br />
			<TimeFormat :format="{
				dateStyle: 'full',
                timeStyle: 'short',
                hour12: false
            }" dFormat="F" :crnt-time="unix" />
			<br />
			<TimeFormat :format="{
							timeStyle: 'short',
                            hour12: false
						}" dFormat="t" :crnt-time="unix" />
			<br />
			<TimeFormat :format="{
                timeStyle: 'medium',
                hour12: false
			}" dFormat="T" :crnt-time="unix" />
			<br />
			<TimeFormat :format="{
							dateStyle: 'short'
						}" dFormat="d" :crnt-time="unix" />
			<br />
			<TimeFormat :format="{
							dateStyle: 'medium'
						}" dFormat="D" :crnt-time="unix" />
        </p>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const unix = Date.now();
</script>