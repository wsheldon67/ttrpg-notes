<script>
  import { post } from '$lib/db/client'
  import Note from './_Note.svelte'
  let promise = post('/app/notes/all')
  // TODO notes with attributes
  // notes with the same "type" have the same base required attributes, which can be consistently searched/used in UI
</script>

{#await promise}
  <p>loading...</p>
{:then result}
  {#each result as note}
    <Note {note} />
  {/each}
{:catch error}
  <p>{error}</p>
{/await}