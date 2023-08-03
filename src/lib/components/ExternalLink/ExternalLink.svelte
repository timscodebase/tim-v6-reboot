<script lang="ts">
	export let article: {
		title: string
		url: string
	}
</script>

<a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>

<style>
</style>
