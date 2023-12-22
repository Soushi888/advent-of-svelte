<script lang="ts">
	export let data;

	let niceKids = data.kids.filter((k) => k.tally >= 0);
	let naughtyKids = data.kids.filter((k) => k.tally < 0);
</script>

<svelte:head>
	<title>Day 1 - Naughty or Nice</title>
</svelte:head>

<section class="px-[10%] flex justify-center flex-col">
	<div>
		<h2 class="text-2xl my-4 text-center">Day 1 - Naughty or Nice</h2>

		<p class="mb-4 text-lg">
			The Elves have been tirelessly creating presents all year round. They’re right on schedule,
			but today they’ve run into a big problem; the ancient system for tracking who’s been naughty
			or nice is out of commission. With the hundreds of thousands of letters from children piling
			up alongside their records of good and bad deeds, the Elves are in dire need of a modern
			solution.
		</p>
		<p class="mb-4 text-lg">
			Your mission is to build a system for the elves, enabling them to input names and tally each
			childs deeds to keep track of whether they’re good or bad. You could even categorise these
			automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their
			record-keeping and have a backup of all the current data in JSON format. You’ll need to import
			this data into your newly developed system.
		</p>
		<p class="mb-4 text-lg">
			You can fetch this data by making a GET request to
			<a class="underline" href="https://advent.sveltesociety.dev/data/2023/day-one.json"
				>https://advent.sveltesociety.dev/data/2023/day-one.json</a
			>.
		</p>
	</div>

	<hr class="mb-4" />

	<div class="flex justify-center gap-10">
		<div class="p-4">
			<h3 class="text-2xl font-bold mb-4">Naughty Kids</h3>
			<ul class="flex flex-col gap-2">
				{#each naughtyKids as naughtyKid}
					<li class="flex justify-between border-b-2">
						<p>{naughtyKid.name}</p>
						<p class="text-red-600">{naughtyKid.tally}</p>
					</li>{/each}
			</ul>
		</div>

		<div class="border-r-2" />

		<div class="p-4">
			<h3 class="text-2xl font-bold mb-4">Nice kids</h3>
			<ul class="flex flex-col gap-2">
				{#each niceKids as niceKid}
					<li class="flex justify-between border-b-2">
						<p>{niceKid.name}</p>
						<p class="text-green-600">{niceKid.tally}</p>
					</li>{/each}
			</ul>
		</div>
	</div>
</section>
