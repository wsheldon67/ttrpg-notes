<script>
  export let collapsed = true
  export let label = 'Please define a label for this Collapse.'

  let className = ''

  function toggle_collapse() {
    collapsed = !collapsed
    className = className === '' ? 'open' : ''
    console.log(className)
  }
</script>
<style>
  button {
    width: 100%;
  }
  div.open {
    border: 1px solid var(--b4);
    margin: 0em .25em;
  }
  button.open {
    background-color: var(--b4);
  }
</style>
<div class={className}>
  <button on:click={toggle_collapse} class={className}>{label}</button>
  {#if !collapsed}
    <slot />
  {/if}
</div>