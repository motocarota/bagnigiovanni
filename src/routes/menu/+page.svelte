<script>
	import { Gallery } from 'flowbite-svelte';
	import Card from '../../lib/Card.svelte';
	import Seo from '../../lib/Seo.svelte';

	const menu = [
		{
			image: '/images/ristorante-00.webp',
			label: 'Menu Ristorante',
			url: '/menu-ristorante'
		},
		{
			image: '/images/ristorante-01.webp',
			label: 'Menu dei Vini',
			url: '/menu-vini'
		},
		{
			image: '/images/ristorante-02.webp',
			label: 'Menu Bar e Tavola Fredda',
			url: '/menu-bar'
		}
	];
</script>

<Seo
	title="I Nostri Menu"
	description="Scopri i menu di Bagni Giovanni: menu ristorante, carta dei vini e proposte del bar e tavola fredda a Cavi di Lavagna."
	image="/images/ristorante-00.webp"
/>

<Gallery class="gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each menu as m}
		<Card image={m.image} label={m.label} url={m.url} />
	{/each}
</Gallery>
