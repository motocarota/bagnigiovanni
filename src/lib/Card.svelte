<script>
	import { Carousel } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	export let url = '#';
	export let image = '';
	export let images = null;
	export let label = '';

	const transition = (x) => fade(x, { duration: 500 });
	const target = url.substring(0, 4) === 'http' ? '_blank' : '';
</script>

<a href={url} {target} class="hover:underline">
	<div class="mx-auto my-4 border-4 border-[#ffffff] shadow-xl rounded-xl">
		{#if images}
			<Carousel {images} duration="4000" {transition} />
		{/if}
		{#if image}
			<img src={image} alt={label} class="h-64 rounded-lg" />
		{/if}
	</div>
	<h2 class="text-2xl text-center w-full font-[500] font-serif italic my-4">
		{label}
	</h2>
</a>
