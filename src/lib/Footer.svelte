<script>
	import Links from './Links.svelte';
	import Title from './Title.svelte';

	let socials = [
		{ url: 'https://www.facebook.com/bagni.giovanni.5', title: 'Facebook' },
		{
			url: 'https://www.tripadvisor.it/Restaurant_Review-g1092804-d2248696-Reviews-Bagni_Giovanni_Ristorante-Cavi_Lavagna_Italian_Riviera_Liguria.html',
			title: 'TripAdvisor'
		}
	];

	let contacts = [
		{
			url: 'https://maps.app.goo.gl/PnewHUZcvyYKsbYv5',
			title: 'Via Lungomare Cavi di Lavagna (GE)'
		},
		{ url: 'tel:00390185696948', title: 'Telefono: 0185 696948' }
	];

	let close = [
		{ url: 'http://doriahotelcavi.com', title: 'Doria Hotel' },
		{ url: 'http://www.bba2passidalmar.it', title: 'B&B A due passi dal mar' },
		{ url: 'http://www.hotelscoglieradicavi.it', title: 'Hotel Scogliera' },
		{ url: 'http://www.pinetadelborgo.it', title: 'Hotel Pineta del borgo' },
		{ url: 'http://www.hotelgenovasestrilevante.com ', title: 'Hotel Genova' }
	];
</script>

<footer class="text-center bg-gray-800 text-gray-300 py-10 mt-20">
	<div class="flex">
		<div class="flex-1 column-3">
			<Title>Seguici</Title>
			<Links links={socials} />

			<Title>Pagamenti accettati</Title>
			<img src="/images/pagamenti.webp" alt="pagamenti accettati" class="mx-auto" />
		</div>
		<div class="flex-1">
			<Title>Lingue</Title>
			<img src="/images/lingue.webp" alt="lingue" class="mx-auto" />
			<Title>Bagni Giovanni</Title>
			<Links links={contacts} />
		</div>
		<div class="flex-1">
			<Title>Vicino a noi</Title>
			<Links links={close} />
		</div>
	</div>
</footer>
