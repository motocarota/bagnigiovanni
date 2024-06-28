<script>
	export let url;
	export let img;
	export let label;
</script>

<a href={url}>
	<img
		src={img}
		alt={label}
		class="rounded-lg h-64 aspect-[4/3] border-4 border-[#ffffff] shadow-xl"
	/>
	<h2 class="text-2xl text-center w-full font-[500] font-serif italic my-4 hover:underline">
		{label}
	</h2>
</a>
