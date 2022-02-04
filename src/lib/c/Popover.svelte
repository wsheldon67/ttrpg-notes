<script>
  import createPopperAction from '../usePopper'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  const [usePopperElement, usePopperTooltip] = createPopperAction()

  export let show = false
  export let placement = 'top'

  function toggle() {
    show = !show
    dispatch('click', show)
  }
</script>
<style>
  .tip {
    padding: .25em;
  }
</style>
<button use:usePopperElement on:click={toggle}>
  <slot name="button"/>
</button>
{#if show}
  <div class='tip' use:usePopperTooltip={{
    placement
  }}><slot name="content"/></div>
{/if}