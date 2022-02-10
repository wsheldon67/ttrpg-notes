<script>
  import Widget from './widget.svelte'
  import Time from '../time/Time.svelte'

  const open = {
    time: false,
    notes: false,
    rules: false
  }
  let lastOpen

  function click(e) {
    const {id, show} = e.detail
    if (lastOpen && show){open[lastOpen] = false}
    if (show){
      lastOpen = id
      open[id] = true
    }
  }
</script>
<style>
  nav {
    position: absolute;
    bottom: 0.25em;
    height: 2em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: .5em;
    background-color: var(--b3);
  }
</style>

<nav>
  <Widget id='time' icon='clock' tip='Adjust game time' on:click={click} show={open.time}>
    <Time />
  </Widget>
  <Widget id='notes' icon='edit-3' tip='Make a note' on:click={click} show={open.notes}>
    //TODO quick note
  </Widget>
  <Widget id='rules' icon='book-open' tip='Look up a rule' on:click={click} show={open.rules}>
    //TODO rule lookup
  </Widget>
</nav>