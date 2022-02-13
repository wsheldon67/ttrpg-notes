<script>
  import { post } from '$lib/db/client'
  import Card from './card.svelte'
  let promise = post('/app/notes/all')
  // TODO notes with attributes
  // notes with the same "type" have the same base required attributes, which can be consistently searched/used in UI
</script>
<style>
  div {
    background-color: var(--b2);
    margin: .5em;
    padding: .5em;
  }
</style>

{#await promise}
  <p>loading...</p>
{:then result}
  {#each result as note}
  <div>
    <Card {note} />
  </div>
  {/each}
{:catch error}
  <p>{error}</p>
{/await}