<script>
	import { page } from '$app/stores';

	export let title;
	export let description;
	export let image = '/images/logo.webp';

	const siteName = 'Bagni Giovanni';
	const siteUrl = 'https://bagnigiovanni.it';

	$: fullTitle = `${title} | ${siteName}`;
	$: canonical = `${siteUrl}${$page.url.pathname}`;
	$: imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:locale" content="it_IT" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
