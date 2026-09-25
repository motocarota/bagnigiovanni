<script>
	import { onMount } from 'svelte';
	import MenuWineRow from '../../lib/MenuWineRow.svelte';
	import Seo from '../../lib/Seo.svelte';
	const endpoint =
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8qhCOv9jDeoTc9afdaTMEvCh9yXXFjVRg855B9WSmr7jrgQipflrQ0cD3Q87bLQ5QvpsWaekF0Nyl/pub?gid=2022557443&single=true&output=tsv';
	let posts = [];
	let loading = true;

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.text();
		const adapter = ([color, name, year = '', desc = '', price, active]) => ({
			color,
			name,
			year,
			desc,
			price,
			active: active == 1
		});
		posts = data
			.split('\r\n')
			.map((row) => row.split('\t'))
			.map(adapter);
		loading = false;
	});
</script>

<Seo
	title="Carta dei Vini"
	description="La selezione di vini di Bagni Giovanni: etichette locali e nazionali da abbinare ai nostri piatti di pesce a Cavi di Lavagna."
	image="/images/ristorante-01.webp"
/>

<main>
	<h3>Menu dei vini</h3>
	<table>
		{#if loading}
			<p>Caricamento...</p>
		{/if}
		{#each posts as post}
			<MenuWineRow {post} />
		{/each}
	</table>
</main>

<style>
	main {
		text-align: center;
		background-image: url(img/leaves.webp);
		background-repeat: no-repeat;
		background-position-y: -150px;
		background-position-x: -200px;
		min-height: 600px;
		background-size: contain;
	}
	img {
		margin: 3rem auto;
	}
	table {
		width: 90%;
		margin: 3rem auto;
		border-collapse: separate;
		border-spacing: 0 1em;
	}
</style>
