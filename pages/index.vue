<script>
import '@/assets/styles/index.scss';
</script>

<template>
	<div class="container">
		<h1 class="title">Vänner Bästa</h1>
		<p>
			A Young Royals fan website with links to different discussion
			spaces.
		</p>
		<strong>It's official! There is going to be another season!</strong>
		<div class="grid">
			<LinkCard
				title="Watch"
				link="https://www.netflix.com/title/81210762"
			/>
			<LinkCard title="Discord" link="https://discord.gg/hyKVDeRJ8Y" />
			<LinkCard
				title="Reddit"
				link="https://www.reddit.com/r/YoungRoyals/"
			/>
			<LinkCard
				title="Babbel (ref)"
				link="https://www.talkable.com/x/IchxFl"
			/>
			<LinkCard
				title="Matrix →"
				link="https://matrix.to/#/#young-royals:matrix.org"
			/>
			<LinkCard
				title="Discord Utilities"
				link="/utilities"
			/>
		</div>
	</div>
</template>
