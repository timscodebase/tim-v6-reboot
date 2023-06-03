<script lang="ts">
		import { writable } from 'svelte/store';
		import { isLogoAnimationEnded } from './stores';
		$isLogoAnimationEnded = writable(false);
</script>

<div>
		<nav class:fly-down={$isLogoAnimationEnded} aria-label="Main">
				<a href="/">Me</a>
				<a href="/projects">Projects</a>
				<a href="/resume">Resume</a>
				<a href="/uses">Uses</a>
		</nav>
</div>

<style>
		.fly-down {
				transform: translateY(0);
				transition: transform 0.5s cubic-bezier(0.8, 1.3, 0.89, 0.64);
		}
		nav {
				transform: translateY(-130%);
				transition: transform 0s ease;
		}

		nav {
				display: flex;
				background: var(--gradient-red);
				justify-content: space-around;
				align-items: center;
				margin-bottom: 1rem;
				border-radius: calc(var(--border-radius) / 4);
		}

		nav a {
				margin: 0.5rem;
				padding: 1rem;
				font-size: var(--font-size-base);
		}

		@media (max-width: 900px) {
				nav {
						flex-wrap: wrap;
				}

				nav a {
						font-size: 1rem;
						padding: 0.5rem;
				}
		}

		nav a {
				color: var(--color-blue);
				text-decoration: none;
				font-weight: 900;
		}
</style>