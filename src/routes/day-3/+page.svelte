<script lang="ts">
	import type { Gift } from './+page.js';

	export let data;
	const { gifts } = data;

	const MAX_WEIGHT = 100;
	let actualWeight = 0;

	let selectedGifts: Gift[] = [];
	let formEl: HTMLFormElement;

	function addOrRemovePackage(event: Event, gift: Gift) {
		const selectedEl = event.target as HTMLInputElement;
		const isChecked = selectedEl.checked;

		if (isChecked) {
			if (actualWeight + gift.weight > MAX_WEIGHT) {
				alert('Too much weigh');
				selectedEl.checked = false;
				return;
			}
			actualWeight += gift.weight;
			selectedGifts.push(gift);
		} else {
			actualWeight -= gift.weight;
			selectedGifts = selectedGifts.filter((g) => g !== gift);
		}
	}
</script>

<svelte:head>
	<title>Day 3 - Jingle Bell Balancer</title>
</svelte:head>

<section class="px-[10%] flex justify-center flex-col">
	<div>
		<h2 class="text-2xl my-4 text-center">Day 3 - Jingle Bell Balancer</h2>

		<p class="mb-4 text-lg">
			With the elves now back busily crafting gifts and the festive atmosphere at its peak,
			attention shifts to the crucial task of loading Santa’s sleigh. However, Svelte Bot, with it’s
			precise calculations, has brought to light a critical limitation: Santa’s sleigh can carry a
			maximum load of only 100 kg per journey.
		</p>
		<p class="mb-4 text-lg">
			Your mission is to help the Elves solve this crucial task. You’ll be in charge of creating a
			Sleigh Load Balancer (SLB™), a tool designed to ensure that the sleigh is packed efficiently
			without exceeding its maximum capacity.
		</p>
		<p class="mb-4 text-lg">
			The Elves have kept a meticulous record of all the children and the weight of their presents
			in a JSON format. It’s your job to use this data to help keep the Sleigh within it’s new
			operating weight. You should create a tool where Santa can choose whose presents to include on
			his run. The tool should show the current sleigh load and if the maximum of 100kg has been
			exceeded.
		</p>
		<p class="mb-4 text-lg">
			As a bonus you could include an exciting data visualisation, or even a drag and drop
			interface!
		</p>
		<p class="mb-4 text-lg">
			You can fetch this data by making a GET request to <a
				class="underline"
				href="https://advent.sveltesociety.dev/data/2023/day-three.json"
				>https://advent.sveltesociety.dev/data/2023/day-three.json</a
			>
		</p>
	</div>
	<hr class="mb-4" />

	<div>
		<h2 class="text-2xl my-4 text-center">Sleigh Load Balancer (SLB™)</h2>
		<div class="flex justify-between">
			<form class="w-fit" bind:this={formEl}>
				<div class="flex justify-between">
					<h3 class="mb-4 text-3xl font-semibold">Gifts</h3>
					<button class="border-2 px-5 h-8 text-lg rounded-full hover:bg-white hover:text-black"
						>Ready</button
					>
				</div>
				<ul class="border-4 rounded-xl w-fit p-6 flex flex-col gap-3">
					{#each gifts as gift, i}
						<li class="border-b-2 pb-3">
							<label class="text-xl"
								><input
									type="checkbox"
									name="gifts"
									id="gift_{i}"
									on:change={(evt) => addOrRemovePackage(evt, gift)}
								/>
								{gift.name} | {gift.weight} Kg</label
							>
						</li>
					{/each}
				</ul>
			</form>

			<div class="w-1/2">
				<p>Weight : {actualWeight.toFixed(2)}/{MAX_WEIGHT}</p>
			</div>
		</div>
	</div>
</section>
