<template>
	<NavBar :links="navLinks" />
	<div class="container">
		<h1 class="title">Time Utilities</h1>
		<p>
			Your current timezone:
			{{ Intl.DateTimeFormat().resolvedOptions().timeZone }}
		</p>
		<p>The current time in Unix Epoch: <code>{{ Math.floor(crntTime / 1000) }}</code> <br /> or <code>{{crntTime}}</code> in Unix millis</p>

		<p>
			To format the time for Discord, you can use: <br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:f>` }}
			</code>
			<span>
				to get
				<code
					>{{
						Intl.DateTimeFormat(Intl.Locale, {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						}).format(crntTime)
					}}
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							hour: '2-digit',
							minute: '2-digit',
						}).format(crntTime)
					}}</code
				></span
			>
			<br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:F>` }}
			</code>
			<span>
				to get
				<code
					>{{
						Intl.DateTimeFormat(Intl.Locale, {
							weekday: 'long',
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						}).format(crntTime)
					}}
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							hour: '2-digit',
							minute: '2-digit',
						}).format(crntTime)
					}}</code
				></span
			>
			<br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:t>` }}
			</code>
			<span>
				to get
				<code>
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							hour: '2-digit',
							minute: '2-digit',
						}).format(crntTime)
					}}</code
				></span
			>
			<br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:T>` }}
			</code>
			<span>
				to get
				<code>
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
						}).format(crntTime)
					}}</code
				></span
			>
			<br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:d>` }}
			</code>
			<span>
				to get
				<code>
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
						}).format(crntTime)
					}}</code
				></span
			>
			<br />
			<code>
				{{ `<t:${Math.floor(crntTime / 1000)}:D>` }}
			</code>
			<span>
				to get
				<code>
					{{
						Intl.DateTimeFormat(Intl.Locale, {
							day: 'numeric',
                            month: 'long',
                            year: 'numeric',
						}).format(crntTime)
					}}</code
				></span
			>
		</p>
	</div>
</template>

<script setup>
const crntTime = Date.now();
const navLinks = [
	{
		img: {
			name: '/icons/arrow-left.svg',
			alt: 'Back to Utilities',
		},
		to: '/utilities',
		name: 'Utilities',
	},
	{
		img: {
			name: '/icons/home.svg',
			alt: 'Go Home',
		},
		to: '/',
		name: 'Home',
	},
];
</script>
