<script>
  import {time} from '$lib/stores/time'

  export let amt
  export let txt

  function next() {
    time.next_day(amt)
  }
</script>
<style>
  button {
    color: var(--at);
    background-color: var(--good);
    padding: .25em 1.25em;
  }
</style>
{#await time.get()}
Loading...
{:then}
<button on:click={next}>
  {txt}
</button>
{/await}