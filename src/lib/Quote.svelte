<script>
	import { fly } from 'svelte/transition'
	import Star from '$lib/Star.svelte'
	import { onMount } from 'svelte'

	let isStar = false

	let quote = {
		content: 'You are loved.',
		author: 'Me ❤️'
	}

	let isCopied = false

	onMount(async () => {
		try {
			const res = await fetch('https://api.quotable.io/random')
			const data = await res.json()
			quote = data
		} catch (err) {
			console.error(err)
		}

		setInterval(async () => {
			try {
				const res = await fetch('https://api.quotable.io/random')
				const data = await res.json()
				quote = data
			} catch (err) {
				console.error(err)
			}
		}, 15000)
	})

	const copyQuote = async () => {
		isStar = true
		setTimeout(() => {
			isStar = false
		}, 60)
		try {
			await navigator.clipboard.writeText(`${quote.content} - ${quote.author}`)
			isCopied = true
			setTimeout(() => {
				isCopied = false
			}, 1500)
		} catch (err) {
			console.error('Failed to copy: ', err)
		}
	}
</script>

<section>
	<figure>
		<blockquote>
			<p>{quote && quote.content}</p>
		</blockquote>

		<figcaption>- {quote && quote.author}</figcaption>
	</figure>
	<div style:position="relative">
		{#if isStar}
			<div class="star" out:fly={{ opacity: 0, y: -100, duration: 3000 }}>
				<Star />
			</div>
		{/if}
		<button on:click={copyQuote}>{isCopied ? 'Copied!' : 'Copy quote'}</button>
	</div>
</section>

<style>
	.star {
		position: absolute;
		top: 0;
		right: 100px;
	}
	button {
		display: block;
		font-size: 1rem;
		font-weight: 900;
		border-radius: 30px;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: var(--color-blue);
		background: var(--gradient-red);
		margin: 2rem 0 0 auto;
		border: 0;
	}
	figure {
		margin: 0;
		padding: var(--spacer);
		font-weight: 900;
		border-radius: calc(var(--border-radius) / 2);
		font-size: var(--font-size-base);
		background: var(--gradient-red);
		transition: all 0.3s ease;
	}
	figure blockquote {
		margin: 0;
	}

	@media print {
		figure,
		button {
			display: none;
		}
	}
	figure blockquote p {
		color: var(--color-blue);
	}
	figure figcaption {
		font-weight: 900;
		font-size: var(--font-size-base);
		padding-top: var(--spacer);
		color: var(--color-blue);
		text-align: right;
	}

	@media (max-width: 900px) {
		button {
			margin: 1rem 0 0 auto;
		}
		figure {
			width: 100%;
			padding: 1rem;
		}

		figure {
			width: unset;
			margin: 0 auto;
		}

		figure blockquote {
			padding: 1rem;
			font-size: 1rem;
		}
		figure blockquote p {
			margin: 0;
		}
		figure blockquote {
			padding: 0;
		}

		figure figcaption {
			padding-top: 0.5rem;
			font-size: 1rem;
		}
	}
</style>
