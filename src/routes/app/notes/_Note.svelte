<script>
  import {cats} from './types'
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'

  export let note = {}

  let cat = cats[note.type](note)
</script>
<style>
  .quick {
    background-color: var(--p);
  }
  .npc {
    background-color: var(--good);
  }
  h1 {
    text-align: center;
    margin: 0em;
    color: var(--at);
  }
  .cont {
    background-color: var(--b2);
    margin-bottom: .5em;
  }
  .ob {
    padding: .25em;
  }
  .body {
    padding: .25em;
  }
</style>
<div class='cont'>
  <h1 class={note.type}>{cat.title}</h1>
  <div class='ob'>
    <ObjectViewer object={note} attributes={cat.attributes} />
  </div>
  <div class='body'>{note.body || ''}</div>
</div>