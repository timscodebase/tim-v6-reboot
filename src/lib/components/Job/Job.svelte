<script lang="ts">
	import type { JobsType } from '$lib/types'

	export let job: JobsType

	const { title, company, startYear, endYear, description, skills } = job
</script>

<a data-sveltekit-preload-data="tap"rticle class="job">
	<header>
		<h3>{title} - {company}</h3>
		<p>{startYear} - {endYear ? endYear : 'Present'}</p>
	</header>
	<p>{description}</p>
	<h4>Core Skills</h4>
	<ul>
		{#each skills as skill}
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
		font-size: 0.9rem;
	}

	ul > li {
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
</style>
