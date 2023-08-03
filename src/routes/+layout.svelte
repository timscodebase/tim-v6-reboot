<script lang="ts">
	import { Header } from '$lib'
	import { Footer } from '$lib'
	import { Analytics } from '$lib'

	import '../app.css'
	import '../print.css'
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
