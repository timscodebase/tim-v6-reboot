<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Quote } from '$lib'

  function preload(src: string) {
		return new Promise(function(resolve) {
			let img = new Image()
			img.onload = resolve
			img.src = src
		})
	}

	let src = 'https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto/v1661646313/me-2_uxvdhp.png'
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

	<div class="highlights">
		<p>
			I excel at building websites, web apps, and email campaigns, using various web technologies
			and frameworks, such as SvelteKit, React, Next.js, Angular, Ruby on Rails, WooCommerce, and
			HTML5. I have successfully delivered engaging and high-performance web solutions for diverse
			projects, ranging from e-commerce to gaming to healthcare. I have also played pivotal roles in
			multiple startups, where I planned and oversaw frontend code, fostering collaboration and
			innovation. Additionally, I am a cybersecurity enthusiast, who stays up-to-date with the
			latest practices, ensuring the safety and privacy of users' data.
		</p>
		<p>
			My goal is to leverage my diverse experiences and skills to create impactful and user-friendly
			web solutions that meet the needs and expectations of clients and users. I am always eager to
			learn new technologies and frameworks, and to take on new challenges in web development. I
			believe in growing together with the web development community, and I welcome any
			opportunities to connect and collaborate with fellow web developers and tech enthusiasts.
		</p>
		<section class="grid">
			{#await preload(src) then _}
				<img
				in:fly
				width="330"
				height="610"
				{src}
				alt="me"
			/>
			{/await}
			<Quote />
		</section>
		<p>
			My brain works differently than most. Because of this, traditional education is not for me. I
			have taken a few college courses, but I have learned most of what I know through self-study
			and experimentation (reverse engineering others websites). I have a passion for learning and I
			am always looking for new ways to improve my skills and stay current in this rapidly changing
			landscape. The following are some of the most influential educators I have learned from along
			my journey:
		</p>
	</div>
	<div class="teachers">
		<p class="teacher">
			<span>Wes Bos</span>
			<a data-sveltekit-preload-data="tap" href="https://wesbos.com" target="_blank" rel="noopener noreferrer">https://wesbos.com</a>
		</p>
		<p class="teacher">
			<span>Scott Tolinski</span>
			<a data-sveltekit-preload-data="tap" href="https://scotttolinski.com" target="_blank" rel="noopener noreferrer"
				>https://scotttolinski.com</a
			>
		</p>
		<p class="teacher">
			<span>Chris Coyier</span>
			<a data-sveltekit-preload-data="tap" href="https://chriscoyier.net" target="_blank" rel="noopener noreferrer"
				>https://chriscoyier.net</a
			>
		</p>
		<p class="teacher">
			<span>Kevin Powell</span>
			<a data-sveltekit-preload-data="tap" href="https://www.kevinpowell.co" target="_blank" rel="noopener noreferrer"
				>https://www.kevinpowell.co/</a
			>
		</p>
		<p class="teacher">
			<span>Matija</span>
			<a data-sveltekit-preload-data="tap" href="https://joyofcode.xyz" target="_blank" rel="noopener noreferrer"
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
	.highlights p {
		font-size: var(--font-size-base);
		padding-top: var(--font-size-base);
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
		border-radius: 0 0 var(--spacer) var(--spacer);
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
		.highlights p {
			padding-top: 0;
			font-size: var(--font-size-sm);
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
