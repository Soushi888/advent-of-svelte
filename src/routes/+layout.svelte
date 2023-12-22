<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
</script>

<main class="bg-slate-900 min-h-screen text-white">
	<Header />
	<slot />
</main>
