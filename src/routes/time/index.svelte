<script>
  import FullTime from "./_FullTime.svelte";
  import SetTime from './_SetTime.svelte'

  const testDate = {
    year: 3006,
    month: 13,
    day: 20,
    hour: 36,
    minute: 12,
    second: 6
  }
  // TODO be able to use game time more easily, globally
  // Set, increment, get, display
</script>
<div class='center'>
  <SetTime value={testDate}/>
</div>
<FullTime />