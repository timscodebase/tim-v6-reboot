<script lang="ts">
		import { ArticlesType, EducationType, RecentJobsType } from '$lib/types';
		import Job from '$lib/Job.svelte';
		import School from '$lib/School.svelte';
		import resume_data from '$lib/data/resumeData';

		const { articles, education, recentJobs } = resume_data;
</script>

<svelte:head>
		<title>Tim Smith's Resume</title>
		<link rel="canonical" href="https://timsmith.tech">
		<meta name="description" content="Here is my resume.  Hire me!" />
</svelte:head>

<div class="content">
		<h1>Resume</h1>

		<h2>Past Jobs</h2>
		{#each recentJobs as job}
				<Job {job} />
		{/each}

		<h2>Education</h2>
		{#each education as school}
				<School {school} />
		{/each}

		<h2>Articles</h2>
		<ul class="articles">
				{#each articles as article}
						<li>
								<a href="{article.url}" rel="noopener noreferrer">{article.title}</a>
						</li>
				{/each}
		</ul>
</div>

<style>
		.articles {
				padding-bottom: 2rem;
		}
		h2 {
				background: var(--gradient-red);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				background-size: 100% 200%;
				background-position-y: 100%;
				animation: pulse 2s ease-in-out infinite;
				margin: 1rem 0 0 0;
		}

		li {
				padding-top: 0.5rem;
		}

		a {
				text-decoration: underline;
				text-decoration-color: hsl(21deg 89% 59%);
		}
</style>