<template>
	<NavBar :links="navLinks" />
	<div class="container">
		<h1 class="title">Utilities for the Discord Server</h1>
		<LinkCard title="Birthdays" to="/utilities/birthdays" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			navLinks: [
				{
					img: {
						name: '/icons/home.svg',
                        alt: 'Home',
					},
					to: '/',
				},
			],
		};
	},
};
</script>
