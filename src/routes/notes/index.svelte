<script>
  import { find } from '$lib/_db'
  let promise = find('notes/all')
</script>

{#await promise}
<p>loading...</p>
{:then result}
<p>{JSON.stringify(result)}</p>
{:catch error}
<p>{error}</p>
{/await}