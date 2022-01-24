<script>
  import { NavItem, Button, Icon, Popover, Tooltip } from 'sveltestrap'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let id
  export let name
  export let tip
  export let isOpen = false

  function click() {
    dispatch('click',{id, isOpen:!isOpen})
  }
</script>


<NavItem class='ms-2'>
  <Button {id} on:click={click}>
    <Icon {name}/>
  </Button>
  <Tooltip target={id} placement='right'>
    {tip}
  </Tooltip>
  <Popover target={id} placement='top' bind:isOpen>
    <slot/>
  </Popover>
</NavItem>