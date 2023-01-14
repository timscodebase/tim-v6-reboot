<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Analytics from '$lib/analytics.svelte';
</script>

<div class="page-wrapper">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<Analytics />

<style global>
	.page-wrapper {
		margin: 0 auto;
		max-width: 1200px;
	}
</style>
