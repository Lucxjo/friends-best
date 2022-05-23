<template>
	<nav>
		<div v-for="link in links" :key="link">
			<div class="nav-button">
				<NuxtLink :to="link.to">
					<img :src="link.img.name" :alt="link.img.alt" />
					<p>{{ link.name }}</p>
				</NuxtLink>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@use '../assets/styles/colours';
nav {
	margin: 0 auto;
	position: -webkit-sticky;
	position: sticky;
	display: flex;
	justify-content: center;
	align-items: center;
}

nav :hover {
	filter: colours.$filter-accent-colour-light;
}

nav a {
	text-decoration: none;
	color: black;
}

p {
	padding: 0;
	margin: 0;
}

.nav-button {
	margin: 0 1rem;
	padding: 0.5rem;
}
</style>

<script>
const NavBar = resolveComponent('NavBar');

export default {
	props: {
		links: {
			type: Array,
			required: true,
		},
	},
};
</script>
