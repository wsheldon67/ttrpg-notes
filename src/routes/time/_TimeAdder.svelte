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
  .row {
    display: grid;
    grid-template-columns: 1.5em auto 1.5em;
    min-width: 12em;
    max-width: 36em;
  }
  .minus {
    background-color: red;
  }
  .plus {
    background-color: green;
  }
  .label {
    text-align: center;
  }
</style>

<div class='row'>
  <button class='minus' color='danger' on:click={minus}>-</button>
  <div class='label'>
    {txt}
  </div>
  <button class='plus' color='success' on:click={plus}>+</button>
</div>