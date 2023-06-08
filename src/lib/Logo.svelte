<script>
	import { onMount } from 'svelte'
	import { isLogoAnimationEnded } from './stores'

	onMount(() => {
		const body = document.querySelector('body')
		const name = document.querySelector('.name')
		isLogoAnimationEnded.update(() => false)

		name?.addEventListener('animationend', () => {
			isLogoAnimationEnded.update(() => true)
			body?.classList.add('shake')
			console.log('animation ended')
		})

		return () => {
			name?.removeEventListener('animationend', () => {
				isLogoAnimationEnded.set(false)
				body?.classList.remove('shake')
			})
		}
	})
</script>

<a class="logo-wrapper" href="/">
	<p class="name">Tim Smith</p>
	<p class="title">Full Stack Web Engineer</p>
</a>

<style>
	.logo-wrapper {
		display: flex;
		padding-top: 2rem;
		justify-content: center;
		flex-direction: column;
		font-family: 'Prompt', sans-serif;
	}
	@media (max-width: 900px) {
		.logo-wrapper {
			height: unset;
			margin: 1rem 0;
		}
	}

	.title {
		font-size: var(--font-size-lg);
		font-weight: 900;
		margin: 0;
	}
	@media (min-width: 768px) {
		.title {
			font-size: 2.5rem;
			margin-bottom: 2rem;
		}
	}

	.name {
		display: flex;
		align-items: center;
		font-weight: 900;
		font-size: var(--font-size-xl);
		margin: 0;
		background: var(--gradient-red);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 100% 200%;
		background-position-y: 100%;
		border-radius: 0.4rem;
		transform-origin: 5% 2%;
		animation: flop-down 1.5s cubic-bezier(0.8, 1.3, 0.89, 0.64), pulse 1.5s ease-in-out infinite;
	}

	@keyframes flop-down {
		0% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
