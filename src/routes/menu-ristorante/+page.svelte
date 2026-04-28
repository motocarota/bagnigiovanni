<script>
  import { onMount } from "svelte";
  import MenuSpecialRow from "../../lib/MenuSpecialRow.svelte";  
  const endpoint = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS8qhCOv9jDeoTc9afdaTMEvCh9yXXFjVRg855B9WSmr7jrgQipflrQ0cD3Q87bLQ5QvpsWaekF0Nyl/pub?gid=0&single=true&output=tsv";
  let posts = [];
  let loading = true;

  onMount(async function () {
    const response = await fetch(endpoint);
    const data = await response.text();
    const adapter = ([color, name, , desc, price, active]) => ({
      color, name, desc, price, active: active == 1
    })
    
		posts = (data.split('\r\n')).map(row => row.split('\t')).map(adapter)
    loading = false;
  });

</script>

<main>
  <h1>Bagni Giovanni</h1>
  <h3>Menu dei vini</h3>
  <table>
    {#if loading}
      <p>Caricamento...</p>
    {/if}
    {#each posts as post}
      <MenuSpecialRow {post} />
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