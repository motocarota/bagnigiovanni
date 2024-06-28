<script>
	import { Gallery } from 'flowbite-svelte';
	import Card from '../../lib/Card.svelte';

	const getImg = (i) => ({
		alt: `Spiaggia ${i}`,
		src: `/images/spiaggia-${i}.webp`,
		title: 'spiaggia'
	});
	const images1 = ['01', '02', '03', '04'].map(getImg);
	const images2 = ['05', '06', '07', '00'].map(getImg);
</script>

<div>
	La spiaggia e' mantenuta pulita e sicura dal nostro personale e garantisce un relax ottimale per
	tutti.
</div>
<Gallery class="gap-4 md:grid-cols-2">
	<Card images={images1} />
	<div class="h-auto max-w- flex items-center justify-center">
		E' a disposizione per i signori clienti un servizio navetta per raggiungere i vari parcheggi
		lontani dagli stabilimenti.
	</div>
	<div class="h-auto max-w- flex items-center justify-center">
		E' inoltre disponibile un servizio di connettivita' a internet tramite rete WiFi, chiedere al
		bar per ottenere la chiave di accesso.
	</div>
	<Card images={images2} />
</Gallery>
