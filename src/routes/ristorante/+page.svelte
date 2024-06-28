<script>
	import { Gallery } from 'flowbite-svelte';
	import Card from '../../lib/Card.svelte';
	const getImg = (i) => ({
		alt: `Ristorante ${i}`,
		src: `/images/ristorante-${i}.webp`,
		title: 'ristorante'
	});
	const images1 = ['03', '01', '02', '05'].map(getImg);
	const images2 = ['06', '07', '08'].map(getImg);
</script>

<Gallery class="gap-4 md:grid-cols-2">
	<Card images={images1} />
	<div class="h-auto max-w- flex items-center justify-center">
		Nel ristorante dello stabilimento offriamo il massimo del servizio, con una suggestiva vista
		mare sul golfo del Levante Ligure.
	</div>
	<div class="h-auto max-w- flex items-center justify-center">
		Specializzato in raffinate cene di pesce, siamo al servizio di tutti coloro che vogliono una
		cena gustosa d'estate, che puo' essere apprezzata sull’adiacente terrazza all'aria aperta.
	</div>
	<Card images={images2} />
</Gallery>
