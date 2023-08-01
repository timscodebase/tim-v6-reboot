<script lang="ts">
	import Quote from '$lib/Quote.svelte'
</script>

<svelte:head>
	<title>Tim Smith</title>
	<meta
		name="description"
		content="My name is Tim Smith and my passion in life is creating. I'm a kickass web developer, so... I build a lot of websites. I have fun with my website.  This is v6!"
	/>
</svelte:head>

<section>
	<p>
		My passion in life is creating. I'm a kickass web developer, so... I build a lot of websites. Go
		figure, right? I make small pixel-perfect personal websites, fun, quirky web apps and create
		enterprise-ready e-commerce solutions. My creative brain loves to solve any puzzle and face all
		problems.
	</p>
	<section class="grid">
		<img
			width="330"
			height="610"
			src="https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto/v1661646313/me-2_uxvdhp.png"
			alt="me"
		/>
		<Quote />
	</section>
	<p>
		My brain works differently than most. Because of this, traditional education is not for me. I
		have taken a few college courses, but I have learned most of what I know through self-study and
		experimentation (reverse engineering others websites). I have a passion for learning and I am
		always looking for new ways to improve my skills and stay current in this rapidly changing
		landscape. The following are some of the most influential educators I have learned from along my
		journey:
	</p>
	<div class="teachers">
		<p class="teacher">
			<span>Wes Bos</span>
			<a href="https://wesbos.com" target="_blank" rel="noopener noreferrer">https://wesbos.com</a>
		</p>
		<p class="teacher">
			<span>Scott Tolinski</span>
			<a href="https://scotttolinski.com" target="_blank" rel="noopener noreferrer"
				>https://scotttolinski.com</a
			>
		</p>
		<p class="teacher">
			<span>Chris Coyier</span>
			<a href="https://chriscoyier.net" target="_blank" rel="noopener noreferrer"
				>https://chriscoyier.net</a
			>
		</p>
		<p class="teacher">
			<span>Kevin Powell</span>
			<a href="https://www.kevinpowell.co" target="_blank" rel="noopener noreferrer"
				>https://www.kevinpowell.co/</a
			>
		</p>
		<p class="teacher">
			<span>Matija</span>
			<a href="https://joyofcode.xyz" target="_blank" rel="noopener noreferrer"
				>https://joyofcode.xyz</a
			>
		</p>
	</div>
</section>

<style>
	a {
		text-decoration: underline;
		text-decoration-color: var(--accent);
	}
	p {
		font-size: var(--font-size-md);
		line-height: 1.5;
		font-weight: 900;
		line-height: 1.5;
	}
	.teachers {
		padding: 2rem 2vw 0 2vw;
	}
	.teacher {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		font-weight: normal;
		font-size: var(--font-size-md);
		padding-bottom: var(--spacer);
	}

	span {
		font-weight: 900;
		font-size: var(--font-size-md);
	}

	img {
		width: 350px;
		opacity: 1;
		margin: 0 auto;
		aspect-ratio: attr(width) / attr(height);
	}

	span {
		background: var(--gradient-red);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media (max-width: 900px) {
		p {
			grid-template-columns: 1fr;
			padding-bottom: calc(var(--spacer) / 2);
		}
		img {
			width: 100%;
			height: auto;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
		place-items: center;
		grid-gap: 2rem;
		padding-right: 2rem;
		padding: 2rem 2rem 2rem 0;
	}
</style>
