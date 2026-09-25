<script>
	import Seo from '../../lib/Seo.svelte';

	$: innerWidth = 0;
	$: w = Math.min(600, innerWidth) * 0.8;
</script>

<Seo
	title="Webcam"
	description="Guarda le webcam in diretta di Levante e Ponente sulla spiaggia di Cavi di Lavagna, presso Bagni Giovanni."
	image="/images/cam.webp"
/>

<svelte:window bind:innerWidth />
<h2 class="text-2xl font-[500] font-serif italic mt-4">Webcam di Levante</h2>
<iframe
	width="100%"
	height={w}
	src="https://www.vedetta.org/vedetta/lavagna/index.html?nocache=1"
	frameborder="0"
	allowfullscreen="true"
	id="live-east"
	title="widget webcam east"
	class="mx-auto"
	scrolling="no"
></iframe>

<h2 class="text-2xl font-[500] font-serif italic">Webcam di Ponente</h2>
<iframe
	width="100%"
	height={w}
	src="https://vedetta.org/vedetta/cavi-di-lavagna2/index.php?nocache=1"
	frameborder="0"
	allowfullscreen="true"
	id="live-west"
	title="widget webcam west"
	class="mx-auto"
	scrolling="no"
></iframe>
