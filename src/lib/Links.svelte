<script>
	export let links = [];
</script>

<ul>
	{#each links as l}
		<li>
			<a class="m-2 hover:underline" href={l.url} target="_blank">{l.title}</a>
		</li>
	{/each}
</ul>
