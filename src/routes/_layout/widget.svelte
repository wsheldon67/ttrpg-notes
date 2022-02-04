<script>
  import Popover from '$lib/c/Popover.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Icon from '$lib/c/Icon.svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let id
  export let tip
  export let show = false

  function click() {
    dispatch('click',{id, show:!show})
  }
</script>


<div>
  <Popover on:click={click} {show}>
    <Tooltip slot='button' placement='right' {tip}>
      <Icon name='clock' />
    </Tooltip>
    <svelte:fragment slot='content'>
      <slot />
    </svelte:fragment>
  </Popover>
</div>