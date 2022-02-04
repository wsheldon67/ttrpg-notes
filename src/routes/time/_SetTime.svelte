<script>
  import Icon from "$lib/c/Icon.svelte";

  export let value
  
</script>

<style>
  input {
    width: 2ch;
    border: none;
    padding-right: 0;
    padding-left: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .four {
    width: 4ch;
  }
  .cont {
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 1.5em;
    line-height: 1.5em;
    border: 2px ridge var(--b4)
  }
</style>

<div class='cont'>
  <Icon name='clock' />&nbsp;
  <input type='number' class='four' value={value.year} />/
  <input type='number' value={value.month} />/
  <input type='number' value={value.day} />&nbsp;
  <input type='number' value={value.hour} />:
  <input type='number' value={value.minute} />:
  <input type='number' value={value.second} />
</div>