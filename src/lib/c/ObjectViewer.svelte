<script>
  import { defaults } from './ObjectViewerDefaults'
  import Collapse from './Collapse.svelte'
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
  .reg {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
</style>

{#each entries as entry}
  {#if typeof(entry.value) === 'object'}
    <Collapse label={entry.key}>
      <svelte:self object={entry.value} />
    </Collapse>
  {:else if entry.value.length > 50}
    <Collapse label={entry.key}>
      {entry.value}
    </Collapse>
  {:else}
  <div class='reg'>
    <span>{entry.key}</span>
    <span>{entry.value}</span>
  </div>
  {/if}
{/each}