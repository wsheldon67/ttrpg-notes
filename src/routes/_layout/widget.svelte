<script>
  import Popover from '$lib/c/Popover.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let id
  export let tip
  export let isOpen = false

  function click() {
    dispatch('click',{id, isOpen:!isOpen})
  }
</script>


<div>
  <button {id} on:click={click}>
    Icon
  </button>
  <Tooltip target={id} placement='right'>
    {tip}tooltip
  </Tooltip>
  <Popover>
    <slot />
  </Popover>
</div>