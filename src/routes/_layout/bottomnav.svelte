<script>
  import Widget from './widget.svelte'
  import FullTime from '../time/_FullTime.svelte'

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

<div>
  <Widget id='time' icon='alarm' tip='Adjust game time' on:click={click} isOpen={open.time}>
    <FullTime />
  </Widget>
  <Widget id='notes' icon='pen' tip='Make a note' on:click={click} isOpen={open.notes}>
    //TODO quick note
  </Widget>
  <Widget id='rules' icon='book' tip='look up a rule' on:click={click} isOpen={open.rules}>
    //TODO rule lookup
  </Widget>
</div>