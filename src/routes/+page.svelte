<script>
	import Card from '../lib/Card.svelte';
	import SpiaggieIframe from '../lib/SpiaggeIframe.svelte';
</script>

<div class="flex justify-center gap-9">
	<div>
		<div class="col-3">
			<Card url="servizi" img="./images/servizi-00.webp" label="Servizi" />
		</div>
		<div class="col-3">
			<Card url="spiaggia" img="./images/spiaggia-00.webp" label="Spiaggia" />
		</div>
	</div>
	<div>
		<div class="col-3">
			<Card url="ristorante" img="./images/ristorante-00.webp" label="Ristorante" />
		</div>
		<div class="col-3">
			<Card url="eventi" img="./images/bar-00.webp" label="Eventi" />
		</div>
	</div>
	<!-- <SpiaggieIframe /> -->
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.200);
	}
</style>
