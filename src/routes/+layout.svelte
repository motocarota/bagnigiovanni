<script>
	import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />
<div class="place-content-center text-center min-h-96 max-w-5xl mx-auto">
	<slot />
</div>
<Footer />
