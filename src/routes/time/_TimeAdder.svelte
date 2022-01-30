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
  .cont {
    min-width: 12em;
  }
</style>


<div class='row cont'>
<Button class='col-3' color='danger' on:click={minus}>-</Button>
<div class='col text-center'>{txt}</div>
<Button class='col-3' color='success' on:click={plus}>+</Button>
</div>