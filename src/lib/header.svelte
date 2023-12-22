<script lang="ts">
	import { page } from '$app/stores';
	$: permalink = $page.url.pathname;
	$: console.log(permalink);

	let days = 3;
</script>

<header class="bg-slate-700 border-b-4 border-black">
	<h1 class="p-3 font-bold text-white text-4xl text-center"><a href="/">Advent of Svelte</a></h1>

	<nav class="mx-10 mb-4 flex gap-4 text-xl font-semibold text-white flex-wrap">
		{#each new Array(days) as _d, i}
			<a href="/day-{i + 1}" class="nav-item" class:is-selected={permalink === `/day-${i + 1}`}>
				{i + 1}
			</a>
		{/each}
	</nav>
</header>

<style>
	.nav-item {
		border: 2px solid white;
		padding: 6px;
		border-radius: 20%;
	}

	.nav-item:hover,
	.is-selected {
		text-decoration: underline;
		background-color: white;
		color: black;
	}
</style>
