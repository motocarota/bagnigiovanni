<script>
	export let links = [];
</script>

<ul>
	{#each links as l}
		<li>
			<a class="m-2 hover:underline" href={l.url}>{l.title}</a>
		</li>
	{/each}
</ul>
