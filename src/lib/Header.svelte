<script>
	let links = [
		{ url: '/', title: 'HOME' },
		{ url: '/ristorante', title: 'IL RISTORANTE' },
		{ url: '/spiaggia', title: 'LA SPIAGGIA' },
		{ url: '/servizi', title: 'SERVIZI' },
		{ url: '/meteo', title: 'METEO' },
		{ url: '/menu', title: 'MENU' },
		{ url: '/webcam', title: 'WEBCAM' },
		{ url: '/info', title: 'INFORMAZIONI' },
		{ url: '/contatti', title: 'CONTATTI' }
	];
</script>

<header>
	<div>
		<nav>
			<div class="text-center text-uppercase py-4">
				{#each links as l}
					<a class="m-2" href={l.url}>{l.title}</a>
				{/each}
			</div>
		</nav>

		<a class="m-auto p-5" href="/">
			<img src="/images/logo.webp" alt="Bagni Giovanni" class="m-auto py-4" />
		</a>
	</div>
</header>
