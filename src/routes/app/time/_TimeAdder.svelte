<script>
  import { time } from '$lib/stores/time'
import { get } from 'svelte/store'

  export let val
  export let txt

  function plus() {
    time.add(val, 'second')
  }
  function minus() {
    time.add(-val, 'second')
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
    background-color: var(--good);
  }
  .label {
    text-align: center;
    background-color: inherit;
  }
</style>
{#await time.get()}
Loading...
{:then}
<div class='cont'>
  <button class='minus' color='danger' on:click={minus}>-</button>
  <div class='label'>
    {txt}
  </div>
  <button class='plus' color='success' on:click={plus}>+</button>
</div>
{/await}