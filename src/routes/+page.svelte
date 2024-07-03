<script>
	import Card from '../lib/Card.svelte';
</script>

<div class="md:flex justify-center gap-9">
	<div>
		<div class="col-3">
			<Card url="ristorante" image="./images/ristorante-03.webp" label="Il Ristorante" />
		</div>
		<div class="col-3">
			<Card url="menu/" image="./images/ristorante-06.webp" label="I Nostri Menu" />
		</div>
	</div>
	<div>
		<div class="col-3">
			<Card url="spiaggia" image="./images/bar-01.webp" label="La Spiaggia" />
		</div>
		<div class="col-3">
			<Card url="contatti" image="./images/servizi-00.webp" label="Contatti" />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: #e5e7eb;
	}
</style>
