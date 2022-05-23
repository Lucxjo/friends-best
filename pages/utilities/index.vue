<template>
	<NavBar :links="navLinks" />
	<div class="container">
		<h1 class="title">Utilities for the Discord Server</h1>
		<div class="grid-2">
			<LinkCard title="Birthdays" to="/utilities/birthdays" />
			<LinkCard title="Time" to="/utilities/time" />
		</div>
	</div>
</template>

<script setup>
const navLinks = [
	{
		img: {
			name: '/icons/home.svg',
			alt: 'Go Home',
		},
		to: '/',
        name: "Home",
	},
];
</script>
