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
    display: grid;
    grid-template-columns: 1.5em auto 1.5em;
    min-width: 12em;
    max-width: 36em;
    padding-top: 1px;
  }
  .minus, .plus {
    color: var(--at);
    font-weight: bold;
  }
  .minus {
    background-color: var(--bad);
  }
  .plus {
    color: var(--at);
    background-color: var(--good);
  }
  .label {
    text-align: center;
    background-color: inherit;
  }
</style>

<div class='cont'>
  <button class='minus' color='danger' on:click={minus}>-</button>
  <div class='label'>
    {txt}
  </div>
  <button class='plus' color='success' on:click={plus}>+</button>
</div>