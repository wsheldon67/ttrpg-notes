<script>
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
<button class='col-3' color='danger' on:click={minus}>-</button>
<div class='col row align-items-center'>
  <div class='text-center'>{txt}</div>
</div>
<button class='col-3' color='success' on:click={plus}>+</button>
</div>