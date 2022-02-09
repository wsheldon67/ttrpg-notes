<script>
  import {time} from "$lib/stores/time";
  import Icon from "$lib/c/Icon.svelte";
  import LzNumber from "$lib/c/LZNumber.svelte";

  function change(e, unit) {
    time.set_unit(e.detail, unit)
  }
  
</script>

<style>
  .cont :global(input) {
    border: none;
    padding-right: 0;
    padding-left: 0;
  }
  .cont {
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 1.5em;
    line-height: 1.5em;
    border: 2px ridge var(--b4);
    width: min-content;
    padding: 0em .25em;
  }
</style>

<div class='cont'>
  <Icon name='clock' />&nbsp;
  <LzNumber value={$time.year} on:change={e => change(e, 'year')} digits={4}/>/
  <LzNumber value={$time.month} on:change={(e) => change(e, 'month')} />/
  <LzNumber value={$time.day} on:change={e => change(e, 'day')} />&nbsp;
  <LzNumber value={$time.hour} on:change={e => change(e, 'hour')} />:
  <LzNumber value={$time.minute} on:change={e => change(e, 'minute')} />:
  <LzNumber value={$time.second} on:change={e => change(e, 'second')} />
</div>