<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Analytics from '$lib/analytics.svelte';
	import '../app.css';
	import '../print.css';
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
	a {
		cursor: url('$lib/images/pointer.png'), auto;
	}

	button {
		cursor: url('$lib/images/pointer.png'), auto;
	}

	html {
		cursor: url('$lib/images/cursor.png'), auto;
	}

	.page-wrapper {
		margin: 0 auto;
		max-width: 1200px;
	}
	/* span {
	} */

	footer {
		margin: 0;
	}
</style>
