<script lang="ts">
	import { onMount } from 'svelte';

	let tracks: any = [];
	const getTracks = async() => {
		const response = await fetch('http://localhost:3183/api/v1/tracks');
		tracks = await response.json();
		// return tracks;
	};

	onMount(getTracks);
</script>

<svelte:head>
	<title>All Track List</title>
</svelte:head>

<main>
	<div>
		{#each tracks as track}
			<div>
				<h2>{track.track.name} - {track.track.artists[0].name}</h2>
			</div>
		{/each}
	</div>
</main>

<style>

</style>