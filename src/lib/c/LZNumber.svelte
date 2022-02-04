<script>
  import lz from '$lib/leading_zeros'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  // A number input that supports leading zeros and width to match chars
  export let digits = 2
  export let value = 0

  $: displayValue = lz(value, digits)

  function change(e) {
    value = Number(e.target.value)
    dispatch('change', value)
  }
  function keypress(e) {
    if (e.key === 'ArrowUp') {
      value++
    } else if (e.key === 'ArrowDown') {
      value--
    }
    dispatch('change',value)
  }
</script>
<style>

</style>

<input 
  inputmode='numeric'
  pattern='[-+]?[0-9]'
  style={`width: ${digits}ch;`}
  value={displayValue}
  on:change={change}
  on:keydown={keypress}
/>