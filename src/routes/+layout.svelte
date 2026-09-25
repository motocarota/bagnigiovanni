<script>
	import '../app.css';
	import PageTitle from '../lib/PageTitle.svelte';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
	import { page } from '$app/stores';

	function removeTrailingSlash(str) {
		return str.replace(/\/+$/, '');
	}

	$: slug = removeTrailingSlash($page.url.pathname.substring(1)).replace(/-/g, ' ');
	$: title = slug || 'Bagni Giovanni';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		name: 'Bagni Giovanni',
		image: 'https://bagnigiovanni.it/images/ristorante-03.webp',
		url: 'https://bagnigiovanni.it/',
		telephone: '+39 0185 696948',
		servesCuisine: ['Seafood', 'Italian', 'Ligure'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Via Lungomare',
			addressLocality: 'Cavi di Lavagna',
			addressRegion: 'GE',
			postalCode: '16033',
			addressCountry: 'IT'
		},
		sameAs: [
			'https://www.facebook.com/bagni.giovanni.5',
			'https://www.tripadvisor.it/Restaurant_Review-g1092804-d2248696-Reviews-Bagni_Giovanni_Ristorante-Cavi_Lavagna_Italian_Riviera_Liguria.html'
		]
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<Header />

<div class="text-center min-h-96 max-w-5xl mx-auto">
	<PageTitle {title} />
	<slot />
</div>
<Footer />
