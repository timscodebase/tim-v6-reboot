<script>
	export let project

	const { name, image, description, url, github, tech } = project
</script>

<article>
	<div class="wrapper">
		<section class="info">
			<header>
				<h2>{name}</h2>
			</header>
			<p>{description}</p>
			<div>
				<h3>Technologies Used</h3>
				<div class="tech">
					{#each tech as techItem}
						<div>{techItem}</div>
					{/each}
				</div>
			</div>
			<div class="links">
				<a data-sveltekit-preload-data="tap" href={url} target="_blank" rel="noopener noreferrer">View Site</a>
				<a data-sveltekit-preload-data="tap" href={github} target="_blank" rel="noopener noreferrer">View Code</a>
			</div>
		</section>
		<section class="site">
			<iframe loading="lazy" src={url} title={description} frameborder="0" />
		</section>
	</div>
</article>

<style>
	.wrapper {
		display: flex;
		gap: 1rem;
	}
	article:nth-child(even) > .wrapper {
		flex-direction: row-reverse;
	}

	section {
		flex: 1;
	}

	iframe {
		width: 100%;
		aspect-ratio: 1 / 1;
	}
	article {
		display: grid;
		padding: 2rem 0;
		border-bottom: 5px dotted var(--color-orange);
	}
	article:last-child {
		border-bottom: none;
	}
	h2 {
		background: var(--gradient-red);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 100% 200%;
		background-position-y: 100%;
	}

	.tech {
		position: relative;
		margin: 1rem 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-around;
		list-style: none;
		font-size: 0.9rem;
	}

	.links {
		display: flex;
		justify-content: space-around;
	}

	a {
		display: block;
		font-size: 1rem;
		font-weight: 900;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: var(--color-blue);
		background: var(--gradient-red);
	}
	a:hover {
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}

	@media print {
		article {
			display: block;
		}
		.wrapper {
			display: block;
		}
		iframe {
			width: 100%;
			height: 100%;
		}

		a {
			display: none;
		}
	}

	@media (max-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
		iframe {
			width: 0;
			height: 0;
			display: none;
		}

		a {
			padding: 0.5rem 0.7rem;
		}

		.links,
		.tech {
			flex-wrap: wrap;
		}

		.links {
			padding-left: 0;
		}

		.tech {
			margin-top: 3rem;
			padding: 1rem;
			gap: 1rem;
		}
	}
</style>
