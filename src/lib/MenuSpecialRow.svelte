<script>
  export let post;
  const {
    name, price, active
   } = post ?? [];
</script>

{#if active == 1}
{#if !price}
<tr>
  <th colspan="2" class="text-xl bold py-4">{name}</th>
</tr>
{:else}
<tr>
  <td class="text-xl text-center">{name}</td><td> {price}</td>
</tr>
{/if}
{/if}