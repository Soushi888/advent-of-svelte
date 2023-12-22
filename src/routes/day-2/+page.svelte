<script lang="ts">
	let count = 0;
	let counterInput: HTMLInputElement;
	let santaClaus: HTMLImageElement;

	function updateSantaClaus(number: number) {
		santaClaus.style.height = `${number}px`;
		santaClaus.style.width = `${number}px`;
	}

	function addCookies() {
		count += +counterInput.value;
		if (count >= 500) count = 500;
		counterInput.value = '';
		updateSantaClaus(count);
	}

	function removeCookies() {
		count -= +counterInput.value;
		if (count < 0) count = 0;
		counterInput.value = '';
		updateSantaClaus(count);
	}

	function resetCookies() {
		count = 0;
		counterInput.value = '';
		updateSantaClaus(count);
	}
</script>

<svelte:head>
	<title>Day 2 - Merry Munch-o-Meter</title>
</svelte:head>

<section class="px-[10%] flex justify-center flex-col">
	<div>
		<h2 class="text-2xl my-4 text-center">Day 2 - Merry Munch-o-Meter</h2>

		<p class="mb-4 text-lg">
			As the clock ticks down to Christmas Eve, Santa is preparing to eat all the cookies left by
			children all over the world. But amidst the holiday cheer, a small problem has arisen – how
			can we keep track of how many cookies Santa has munched!
		</p>
		<p class="mb-4 text-lg">
			You’ve been tasked with creating a Cookie Counter which can show the tally of cookies munched.
			We should also be able to add, remove, and reset the count. Svelte Bot, in it’s wisdom,
			recommends exploring the dynamic world of Svelte transitions/animations to level up your
			creation.
		</p>
		<p class="mb-4 text-lg">
			If you’re up for it, you could consider adding a feature that shows Santa’s mood based on the
			number of cookies eaten – maybe he gets a little merrier with each cookie!
		</p>
	</div>
	<hr class="mb-4" />

	<div class="flex justify-center gap-10 items-center flex-col">
		<div class="p-6 border-2 w-fit rounded-xl flex flex-col gap-4">
			<p class="text-center">Cookies eated : <span>{count}</span></p>
			<input
				class="text-black px-2 w-20 self-center"
				type="number"
				name="cookies-number"
				id="cookies-number"
				min="0"
				max="500"
				bind:this={counterInput}
			/>
			<div class="flex gap-6">
				<button
					class="p-2 border-2 hover:bg-white hover:text-black transition"
					on:click={addCookies}>Add</button
				>
				<button
					class="p-2 border-2 hover:bg-white hover:text-black transition"
					on:click={removeCookies}>Remove</button
				>
				<button
					class="p-2 border-2 hover:bg-white hover:text-black transition"
					on:click={resetCookies}>Reset</button
				>
			</div>
		</div>

		<div class="flex justify-center">
			<img
				class="transition-all h-0 w-0"
				src="Santa.png"
				alt="Santa Claus"
				bind:this={santaClaus}
			/>
			{#if count === 500}
				<p class="text-center absolute text-xl">I'm full !</p>{/if}
		</div>
	</div>
</section>
