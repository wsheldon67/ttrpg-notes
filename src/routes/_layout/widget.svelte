<script>
  import Popover from '$lib/c/Popover.svelte'
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
  <div target={id} placement='right'>
    {tip}tooltip
  </div>
  <Popover>
    <slot />
  </Popover>
</div>