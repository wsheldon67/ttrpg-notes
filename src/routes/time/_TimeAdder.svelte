<script>
  import { Button } from 'sveltestrap'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let val
  export let txt

  function plus() {
    dispatch('change',val)
  }
  function minus() {
    dispatch('change',-val)
  }
</script>

<style>
  div {
    min-width: 12em;
  }
</style>


<div class='row'>
<Button class='col-3' color='danger' on:click={minus}>-</Button>
<label class='col text-center'>{txt}</label>
<Button class='col-3' color='success' on:click={plus}>+</Button>
</div>