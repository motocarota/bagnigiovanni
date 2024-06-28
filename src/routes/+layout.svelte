<script>
	import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />
<div class="mx-auto place-content-center text-center min-h-96">
	<slot />
</div>
<Footer />
