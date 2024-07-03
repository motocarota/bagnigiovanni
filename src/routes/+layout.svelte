<script>
	import '../app.css';
	import PageTitle from '../lib/PageTitle.svelte';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
	import { page } from '$app/stores';

	function removeTrailingSlash(str) {
		return str.replace(/\/+$/, '');
	}

	$: title = removeTrailingSlash($page.url.pathname.substring(1));
</script>

<Header />

<div class="text-center min-h-96 max-w-5xl mx-auto">
	<PageTitle {title} />
	<slot />
</div>
<Footer />
