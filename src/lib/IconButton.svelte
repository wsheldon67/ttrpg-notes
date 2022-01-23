<script>
  import {Icon, Tooltip, Button} from 'sveltestrap'
  export let name
  export let id
  export let tip
  export let placement = 'top'
</script>
<Button {id}><Icon {name} /></Button>
<Tooltip target={id} {placement}>{tip}</Tooltip>