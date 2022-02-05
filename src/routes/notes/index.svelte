<script>
  import { find } from '$lib/_db'
  let promise = find('/notes/all')
  // TODO notes with attributes
  // notes with the same "type" have the same base required attributes, which can be consistently searched/used in UI
</script>

{#await promise}
  <p>loading...</p>
{:then result}
  <p>{JSON.stringify(result)}</p>
{:catch error}
  <p>{error}</p>
{/await}