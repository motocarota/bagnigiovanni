<script>
	import { Gallery } from 'flowbite-svelte';
	import Card from '../../lib/Card.svelte';

	const menu = [
		{
			image: '/images/ristorante-00.webp',
			label: 'Menu Ristorante',
			url: 'https://motocarota.github.io/menu/view/bagni-giovanni'
		},
		{
			image: '/images/ristorante-01.webp',
			label: 'Menu dei Vini',
			url: 'https://motocarota.github.io/menu/view/bagni-giovanni-vini'
		},
		{
			image: '/images/ristorante-02.webp',
			label: 'Menu Bar e Tavola Fredda',
			url: 'https://motocarota.github.io/menu/view/bagni-giovanni-bar'
		}
	];
</script>

<Gallery class="gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each menu as m}
		<Card image={m.image} label={m.label} url={m.url} />
	{/each}
</Gallery>
