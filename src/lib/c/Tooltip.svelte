<script>
  import createPopperAction from '../usePopper'

  const [usePopperElement, usePopperTooltip] = createPopperAction()

  export let show = false
  export let placement = 'top'
  export let tip = 'Please provide a tip for this tooltip.'

  function show_tip() {
    show = true
  }
  function hide_tip() {
    show = false
  }
</script>
<style>
  .tip {
    padding: .25em;
  }
</style>
<span
  use:usePopperElement
  on:mouseenter={show_tip}
  on:focus={show_tip}
  on:mouseleave={hide_tip}
  on:blur={hide_tip}
  >
  <slot />
</span>
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
  }}>{tip}</div>
{/if}