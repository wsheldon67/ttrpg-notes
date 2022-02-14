<script>
  import { defaults } from './ObjectViewerDefaults'
  // TODO deeper nested objects
  // TODO collapse long text, overridable

  export let object = {}
  export let attributes = {}
  let comboAttr = {...defaults, ...attributes}
  $: entries = arrayify()
  function arrayify() {
    const res = []
    for (let key in object) {
      if (!comboAttr[key]){
        res.push({key, value: object[key]})
        continue
      }
      if (comboAttr[key] === 'ignore'){continue}
      const value = comboAttr[key](object[key])
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