<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
</script>

<Header />
<main class="bg-slate-900 min-h-screen text-white">
	<slot />
</main>
