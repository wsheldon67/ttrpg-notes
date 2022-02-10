<script>
  import FullTime from "./_FullTime.svelte";
  import SetTime from './_SetTime.svelte'
  import NextTime from './_NextTime.svelte'

  // TODO be able to use game time more easily, globally
  // Set, increment, get, display
</script>
<div class='center'>
  <SetTime />
</div>
<FullTime />
<div class='center'>
  <NextTime amt={1} txt='Next Day'/>
</div>