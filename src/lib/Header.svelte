<script lang="ts">
	import Logo from '$lib/Logo.svelte'
	import Nav from '$lib/Nav.svelte'
</script>

<header>
	<Logo />
	<div class="nav-wrapper">
		<Nav />
	</div>
</header>

<style>
	.nav-wrapper {
		overflow: hidden;
		height: 170px;
	}
</style>
