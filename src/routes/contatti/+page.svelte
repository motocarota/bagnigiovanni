<script>
	import { Button } from 'flowbite-svelte';
	import Title from '../../lib/Title.svelte';

	const list = [
		{ name: 'Telefono', num: '0185 696948' },
		{ name: 'Eugenio', num: '338 2057500' },
		{ name: 'Rudy', num: '333 1518075' }
	];
</script>

<div class="center">
	<Title class="my-2">Bagni Giovanni</Title>
	<div class="mah-96">
		<p class="mb-4">Via Lungomare Cavi di Lavagna (GE)</p>
		{#each list as i}
			<p class="mb-4">{i.name}: <a href="tel:{i.num}" class="text-sky-500">{i.num}</a></p>
		{/each}
	</div>

	<img src="/images/lingue.webp" alt="lingue" class="mx-auto my-4" />
	<img src="/images/map.webp" alt="lingue" class="mx-auto my-4 w-9/12" />
</div>
