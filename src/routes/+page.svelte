<script>
	import Card from '../lib/Card.svelte';
</script>

<div class="md:flex justify-center gap-9">
	<div>
		<div class="col-3">
			<Card url="ristorante" image="./images/ristorante-00.webp" label="Il Ristorante" />
		</div>
		<div class="col-3">
			<Card url="menu" image="./images/servizi-00.webp" label="I Nostri Menu" />
		</div>
	</div>
	<div>
		<div class="col-3">
			<Card url="spiaggia" image="./images/spiaggia-00.webp" label="La Spiaggia" />
		</div>
		<div class="col-3">
			<Card url="contatti" image="./images/bar-00.webp" label="Contatti" />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.200);
	}
</style>
