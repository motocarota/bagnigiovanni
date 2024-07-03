<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let links = [
		{ url: '/ristorante', title: 'IL RISTORANTE' },
		{ url: '/spiaggia', title: 'LA SPIAGGIA' },
		{ url: '/menu/', title: 'I NOSTRI MENU' },
		{ url: '/prenota', title: 'PRENOTAZIONI' },
		{ url: '/webcam', title: 'WEBCAM' },
		{ url: '/meteo', title: 'METEO' },
		{ url: '/contatti', title: 'CONTATTI' }
	];
</script>

<Navbar let:hidden let:toggle class="bg-transparent">
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} class="mx-auto bg-transparent">
		{#each links as l}
			<NavLi href={l.url} class="text-slate-500 hover:underline">{l.title}</NavLi>
		{/each}
	</NavUl>
</Navbar>

<a class="p-5" href="/">
	<img src="/images/logo.webp" alt="Bagni Giovanni" class="m-auto py-4" />
</a>
