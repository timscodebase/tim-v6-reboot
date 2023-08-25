<script lang='ts'>
	import { Contact } from "$lib"
</script>

<footer>
	<a class="logo" href="/">
		<p>
			<span class="name">Tim Smith</span>
			<span class="date">&copy; {new Date().getFullYear()}</span>
		</p>
	</a>
	<section>
		<a href="https://linkedin.com/in/timsmith25" target="_blank" rel="noopener noreferrer"
			>LinkedIn</a
		>
		<a href="https://github.com/timscodebase" target="_blank" rel="noopener noreferrer"
			>Github</a
		>
		<a href="https://codepen.io/WebRuin" target="_blank" rel="noopener noreferrer">CodePen</a>
		<a href="https://github.com/webruin" target="_blank" rel="noopener noreferrer"
			>Gitub (older)</a
		>
	</section>
	<Contact />
</footer>

<style>
	footer {
		display: flex;
		flex-wrap: wrap;
		color: var(--color-footer);
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		padding: 4rem 3rem;
		text-align: center;
		background: rgba(0, 0, 0, 0.2);
	}

	@media print {
		footer {
			display: none;
		}
	}

	@media (max-width: 900px) {
		footer {
			justify-content: center;
			padding: 2rem 1.5rem;
			flex-direction: column;
			margin-left: -1rem;
			margin-right: -1rem;
		}
		.date {
			display: none;
		}
		.name {
			font-size: 1.5rem !important;
		}
	}

	section {
		display: flex;
		gap: var(--spacer);
	}
	span {
		font-size: 2rem;
		text-align: center;
	}

	.date {
		font-size: 1rem;
	}

	.name {
		font-size: 2rem;
		color: var(--color-footer);
		font-weight: 900;
		background: var(--gradient-red);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	p {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
	}

	.logo {
		margin: 0 auto;
		margin-bottom: calc(var(--spacer) / 2);
	}

	.logo:hover {
		text-decoration: none;
	}

	a {
		color: var(--color-footer);
		text-decoration: none;
	}
	a:hover {
		color: var(--color-text);
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}
</style>
