<template>
	<a class="card" :href="link">
		<p>{{ title }} →</p>
	</a>
</template>

<script>
export default {
	props: ['title', 'link'],
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
	border-radius: 20px;
	transition: color 0.15s ease, border-color 0.15s ease;
}
.card p {
	margin: 0;
	font-size: 1.25rem;
	line-height: 1.5;
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

@media (max-width: 600px) {
	.card {
		margin: 0.5rem;
		padding: 1.25rem;
		width: 9rem;
	}
	
}
</style>
