<template>
	<a class="card" :href="link">
		<p>{{ title }}</p>
		<p>{{ description }}</p>
	</a>
</template>

<script>
export default {
	props: ['title', 'description', 'link'],
};
</script>

<style lang="scss" scoped>
.card {
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 2px solid #000;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
}

.card:link,
.card:visited {
	color: #000;
}

.card:hover,
.card:focus,
.card:active {
	color: #0070f3 !important;
	border-color: #0070f3;
}
</style>
