<script>
	export let school

	const { name, location, startYear, endYear, fieldsOfStudy } = school
</script>

<article>
	<header>
		<h3>{name} - {location}</h3>
		<p>{startYear} - {endYear ? endYear : 'Present'}</p>
	</header>
	<ul>
		{#each fieldsOfStudy as fieldOfStudy}
			<li>{fieldOfStudy}</li>
		{/each}
	</ul>
</article>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	@media (max-width: 900px) {
		h3 {
			margin-bottom: 0rem;
		}
		p {
			padding-bottom: 1rem;
		}
	}

	article {
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 5px dotted var(--color-orange);
	}
</style>
