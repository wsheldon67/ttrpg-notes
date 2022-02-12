<script>
  import { attributes } from './attributes'

  export let note = {}
  $: entries = arrayify()
  function arrayify() {
    const res = []
    for (let key in note) {
      if (attributes[key] === 'ignore'){continue}
      if (attributes[key]){var value = attributes[key](note[key])}
      else {var value = note[key]}
      res.push({key, value})
    }
    return res
  }
</script>
<style>
  div {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
</style>
{#each entries as entry}
  <div>
    <span>{entry.key}</span>
    <span>{entry.value}</span>
  </div>
{/each}