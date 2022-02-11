<script>
  import FullTime from "./_FullTime.svelte";
  import SetTime from './_SetTime.svelte'
  import NextTime from './_NextTime.svelte'
  import Weekday from './_Weekday.svelte'

  // TODO be able to use game time more easily, globally
  // Set, increment, get, display
</script>
<style>
  .top {
    padding-bottom: .25em;
  }
  .weekday {
    vertical-align: sub;
  }
</style>
<div class='center wrap top'>
  <div><span class='weekday'><Weekday /></span></div>
  <SetTime />
</div>
<FullTime />
<div class='center'>
  <NextTime amt={1} txt='Next Day'/>
</div>