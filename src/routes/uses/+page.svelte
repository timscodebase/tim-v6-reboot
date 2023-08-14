<script lang="ts">
</script>

<svelte:head>
	<title>Tim Smith Uses</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="This is the tech and software I use." />
</svelte:head>

<h1>Uses</h1>
<div class="wrapper">
	<section>
		<h2>Hardware</h2>
		<ul>
			<li><span>Computer</span> M1 MacBook Pro</li>
			<li><span>Monitor</span> Scepter P30</li>
			<li><span>Web Cam</span> Logitech HD Pro Webcam C920</li>
			<li><span>Speakers</span> Apple HomePod Minis</li>
			<li><span>Lights</span> Nanoleaf Essentials A19</li>
			<li><span>Lights</span> Nanoleaf Lines</li>
			<li><span>Keyboard</span> Apple Wireless Keyboard</li>
			<li><span>Mouse</span> Apple Magic Trackpad</li>
			<li><span>Mouse Pad</span> Logitech G240</li>
			<li><span>Luxury Listening</span> Apple AirPod Max</li>
			<li><span>Exercise Headphones</span> Apple AirPod Pro</li>
			<li><span>Phone</span> iPhone 12</li>
			<li><span>Watch</span> Apple Watch Series 6</li>
			<li><span>Dock</span> Anker Series 5</li>
			<li><span>Play Computer</span> Raspberry Pi 4</li>
		</ul>
	</section>
	<section>
		<h2>Software</h2>
		<ul>
			<li><span>IDE</span> VSCode-Insiders</li>
			<li><span>VSCode Theme</span> Retreon</li>
			<li><span>Terminal</span> iTerm2</li>
			<li><span>Browser</span> Arc</li>
			<li><span>Virual Machine</span> Parallels Desktop</li>
			<li><span>Terminal Produtivity</span> Fig</li>
			<li><span>General Produtivity</span> Raycast</li>
			<li><span>OS</span> MacOS 13.0 Beta (22A5342f)</li>
			<li><span>Ad-Blocking</span> Pi-Hole</li>
		</ul>
	</section>
</div>

<style>
	li {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-weight: normal;
		padding-bottom: var(--spacer);
	}

	@media (max-width: 900px) {
		li {
			flex-direction: column;
			padding-bottom: calc(var(--spacer) / 2);
		}
	}

	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacer);
	}

	@media (max-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}

	span {
		font-weight: 900;
		color: var(--accent);
		font-size: 1.2rem;
	}
</style>
