<script lang="ts">
	let isPlayed: boolean = false;
	const turnPlay = (): boolean => {
		isPlayed = true;
		return isPlayed;
	};
	const turnPause = (): boolean => {
		isPlayed = false;
		return isPlayed;
	};
</script>

<svelte:head>
	<title>More JRPG Heardle</title>
</svelte:head>

<main>
	<header>
		<div>
			<h1>More JRPG Heardle</h1>
		</div>
	</header>
	<hr>
	<section id="list-answer">
		
	</section>
	<section id="list-answer">
		
	</section>
	<section id="list-answer">
		
	</section>
	<section id="list-answer">
		
	</section>
	<section id="list-answer">
		
	</section>
	<section id="list-answer">
		
	</section>
	<section id="controller">
		<div id="timeline">

		</div>
		{#if isPlayed === false}
			<div id="pause-button" on:click={turnPlay}>

			</div>
		{:else}
				<div id="play-button" on:click={turnPause}>

				</div>
		{/if}
	</section>
	<section id="form-answer">
		<div id="answer-input">
			<input type="text" name="answer" id="answer">
		</div>
		<div id="skip-button">
			Skip
		</div>
		<div id="submit-button">
			Submit
		</div>
	</section>
</main>

<style>
	main {
		font-family: "Bungee", cursive;
	}
	header {
		text-align: center;
	}

	#list-answer {
		border: 2px solid black;
		width: 41%;
		height: 38px;
		margin: 10px auto;
	}

	#timeline {
		width: 100%;
		height: 20px;
		border: 2px solid black;
		margin: 20px auto;
	}

	#play-button, #pause-button {
		border: 2px solid black;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		margin: 0 auto;
		box-shadow: 1px 1px 1px 1px black;
		cursor: pointer;
	}

	#play-button {
		background-color: rgb(221, 47, 47);
	}

	#pause-button {
		background-color: rgb(18, 182, 18);
	}

	#form-answer {
		display: flex;
	}

	#answer {
		border: 2px solid black;
		width: 500px;
		height: 30px;
		font-size: 18px;
		margin: 10px auto;
	}

	#submit-button, #skip-button {
		border: 2px solid black;
		border-radius: 30px;
		width: 5%;
		height: 30px;
		box-shadow: 1px 1px 1px 1px rgb(0, 0, 0);
		margin: 20px auto;
		padding: 3px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}

	#submit-button {
		background-color: rgb(221, 163, 28);
	}

	#skip-button {
		background-color: rgb(151, 151, 149);
	}

	#submit-button:active, #skip-button:active, #play-button:active, #pause-button:active {
		transform: scale(0.98);
	}
</style>