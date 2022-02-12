<script>
  export let note = {}
  const instructions = {
    _id: 'ignore',
    time: (o) => JSON.stringify(o)
  }
  $: entries = arrayify()
  function arrayify() {
    const res = []
    for (let key in note) {
      if (instructions[key] === 'ignore'){continue}
      if (instructions[key]){var value = instructions[key](note[key])}
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