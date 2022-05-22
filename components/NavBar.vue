<template>
	<nav>
		<div v-for="link in links" :key="link">
			<NuxtLink :to="link.to" class="nav-button">
				<img :src="link.img.name" :alt="link.img.alt" />
			</NuxtLink>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}
.nav-button {
    padding: .25rem;
	margin: .25rem;
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
