<script lang="ts">
	let isPlayed: boolean = false;
	let answer: string = "";

	let answerlist: string[] = [];

	const turnPlay = (): boolean => {
		isPlayed = true;
		return isPlayed;
	};

	const turnPause = (): boolean => {
		isPlayed = false;
		return isPlayed;
	};

	const handleAnswer = (): void => {
		if(answerlist.length < 6) {
			answerlist.push(answer);
		} else {
			alert("You can\'t add new song to the box.");
		}
		console.log(answerlist);
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
		{answerlist[0] !== undefined ? answerlist[0] : ""}
	</section>
	<section id="list-answer">
		{answerlist[1] !== undefined ? answerlist[1] : ""}
	</section>
	<section id="list-answer">
		{answerlist[2] !== undefined ? answerlist[2] : ""}
	</section>
	<section id="list-answer">
		{answerlist[3] !== undefined ? answerlist[3] : ""}
	</section>
	<section id="list-answer">
		{answerlist[4] !== undefined ? answerlist[4] : ""}
	</section>
	<section id="list-answer">
		{answerlist[5] !== undefined ? answerlist[5] : ""}
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
			<input type="text" name="answer" id="answer" bind:value={answer}>
		</div>
		<div id="answer-button">
			<div id="skip-button">
				Skip
			</div>
			<div id="submit-button" on:click={handleAnswer}>
				Submit
			</div>
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
		/* display: flex; */
		margin: 20px auto;
	}

	#answer-input {
		/* margin: 0 auto; */
		text-align: center;
	}

	#answer {
		border: 2px solid black;
		width: 500px;
		height: 30px;
		font-size: 18px;
		margin: 10px auto;
	}

	#answer-button {
		display: flex;
	}

	#submit-button, #skip-button {
		/* display: flex; */
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