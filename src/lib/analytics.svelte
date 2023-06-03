<script lang="ts">
		import { page } from '$app/stores';
		import { gtag } from '$lib/gtag';

		$: {
				if (typeof gtag !== 'undefined') {
						gtag('config', 'G-J59Q6MQ46K', {
								page_title: document.title,
								page_path: $page.url.pathname
						});
				}
		}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-J59Q6MQ46K"></script>
	<script>
			window.dataLayer = window.dataLayer || [];

			gtag('js', new Date());
			gtag('config', '<MEASUREMENT_ID>');
	</script>
</svelte:head>