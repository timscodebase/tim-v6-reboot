<script lang="ts">
	import Project from '$lib/Project.svelte';
	import projectData from '$lib/data/projectData.json';
	const { projects } = projectData;
</script>

<svelte:head>
	<title>Learning Projects</title>
	<link rel="canonical" href="https://timsmith.tech">
	<meta name="description" content="Here is what I am up to these days" />
</svelte:head>

<div class="content">
	<h1>Learning Projects</h1>
	<p>
		These projects enable me to learn new frameworks, languanges, and all the new features comming
		HTML, CSS, and JS. I also use these projects to learn new design patterns and to practice my
		design skills.
	</p>

	<div class="grid">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>

<style>
	p {
		font-size: 2rem;
		padding-top: 2rem;
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
