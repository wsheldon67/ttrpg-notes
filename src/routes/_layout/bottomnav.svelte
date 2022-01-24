<script>
  import { Nav } from 'sveltestrap'
  import Widget from './widget.svelte'

  const open = {
    time: false,
    notes: false,
    rules: false
  }
  let lastOpen

  function click(e) {
    const {id, isOpen} = e.detail
    if (lastOpen && isOpen){open[lastOpen] = false}
    if (isOpen){lastOpen = id}
  }
</script>

<Nav class="fixed-bottom justify-content-start" dark color="dark">
  <Widget id='time' name='alarm' tip='Adjust game time' on:click={click} isOpen={open.time}>
    //TODO time adjust
  </Widget>
  <Widget id='notes' name='pen' tip='Make a note' on:click={click} isOpen={open.notes}>
    //TODO quick note
  </Widget>
  <Widget id='rules' name='book' tip='look up a rule' on:click={click} isOpen={open.rules}>
    //TODO rule lookup
  </Widget>
</Nav>