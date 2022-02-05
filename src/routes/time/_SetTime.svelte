<script>
  import Icon from "$lib/c/Icon.svelte";
  import LzNumber from "$lib/c/LZNumber.svelte";
  import { find } from '$lib/_db'

  export let value = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }

  async function change(e, unit) {
    value[unit] = e.detail
    const res = await find('/time/set-global', value)
    console.log(res)
  }
  // TODO attach to db
  
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
  <LzNumber value={value.year} on:change={e => change(e, 'year')} digits={4}/>/
  <LzNumber value={value.month} on:change={(e) => change(e, 'month')} />/
  <LzNumber value={value.day} on:change={e => change(e, 'day')} />&nbsp;
  <LzNumber value={value.hour} on:change={e => change(e, 'hour')} />:
  <LzNumber value={value.minute} on:change={e => change(e, 'minute')} />:
  <LzNumber value={value.second} on:change={e => change(e, 'second')} />
</div>