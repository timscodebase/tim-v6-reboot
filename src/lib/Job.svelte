<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	export let job;

	const { role, company, startYear, endYear, description, jobSkills } = job;

	// onMount(() => {
	// 	gsap.to('.job', {
	// 		scrollTrigger: {
	// 			trigger: '.job',
	// 			start: 'top 80%',
	// 			end: 'bottom 20%',
	// 			toggleActions: 'play none none reverse'
	// 		},
	// 		duration: 1,
	// 		opacity: 1,
	// 		y: 0,
	// 		ease: 'power4.out'
	// 		// stagger: 0.2,
	// 	});
	// 	// gsap.fromTo(
	// 	// 	'.job',
	// 	// 	{
	// 	// 		scrollTrigger: '.job',
	// 	// 		opacity: 0,
	// 	// 		y: 50
	// 	// 	},
	// 	// 	{
	// 	// 		scrollTrigger: '.job',
	// 	// 		opacity: 1,
	// 	// 		y: 0,
	// 	// 		duration: 1,
	// 	// 		ease: 'power4.out',
	// 	// 		stagger: 0.2
	// 	// 	}
	// 	// );
	// });
</script>

<article class="job">
	<header>
		<h3>{role} - {company}</h3>
		<p>{startYear} - {endYear ? endYear : 'Present'}</p>
	</header>
	<p>{description}</p>
	<h4>Core Skills</h4>
	<ul>
		{#each jobSkills as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</article>

<style>
	header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: baseline;
		padding-bottom: 1rem;
	}

	article {
		/* opacity: 0; */
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 5px dotted var(--color-orange);
	}

	h4 {
		color: var(--color-orange);
	}

	ul {
		margin: 0 1rem;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		list-style: none;
		gap: 1rem;
		font-size: 0.9rem;
	}
</style>
