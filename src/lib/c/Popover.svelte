<script>
  import createPopperAction from '../usePopper'

  const [usePopperElement, usePopperTooltip] = createPopperAction()

  export let show = false
  export let placement = 'top'

  function toggle() {
    show = !show
  }
</script>
<style>
  .tip {
    padding: .25em;
  }
</style>
<button use:usePopperElement on:click={toggle}>
  openPopover
</button>
{#if show}
  <div class='tip' use:usePopperTooltip={{
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  }}><slot /></div>
{/if}