<script>
	import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="m-auto max-w-screen-lg min-h-screen">
	<Header />
	<slot />
</div>
<Footer />
