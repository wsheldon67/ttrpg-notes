<script>
  import Popover from "$lib/c/Popover.svelte"
  import Icon from '$lib/c/Icon.svelte'

  let show = false
  function buttonthing() {
    show = !show
  }
</script>

<Popover {show}>
  <Icon name='menu' slot='button' />
  <div slot='content'>
    This is my content
  </div>
</Popover>
<button on:click={buttonthing}>openclose</button>
<h1>Welcome to AppName</h1>
<p>Open the menu to get started</p>
