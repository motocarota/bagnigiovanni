<script>
  export let post;
  const {
    color = "", name = '', year = '', desc = '', price, active
   } = post ?? [];
</script>

{#if active == 1}
<tr>
  {#if !price}
    <th colspan="4" class="pt-5 text-xl">{name}</th>
  {:else}
    <td>
      <div style="background: {color}" class='dot'></div>
    </td>
    <td><span class="text-xl">{name}</span><br/> {year} - {desc} </td>
    <td class="price">{price}</td>
  {/if}
  </tr>
{/if}
  
<style>
  th {
    font-weight: 900;
  }
  td {
    text-align: left;
  }
  .price {
    min-width: 80px;
  }
  .dot {
    height: 15px;
    width: 15px;
    border-radius: 15px
  }
</style>