<script>
  import {Icon, Tooltip, Button} from 'sveltestrap'
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()

  export let name
  export let id
  export let tip
  export let placement = 'top'

  function click() {
    dispatch('click')
  }

</script>
<Button {id} on:click={click}><Icon {name} /></Button>
<Tooltip target={id} {placement}>{tip}</Tooltip>