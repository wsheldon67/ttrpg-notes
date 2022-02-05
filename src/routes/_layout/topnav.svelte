<script>
  import SiteNav from './sitenav.svelte'
  import Icon from '$lib/c/Icon.svelte'

  let isOpen = false
  function toggle() {isOpen = !isOpen}
  // TODO search
</script>
<style>
  .nav {
    display: grid;
    grid-template-columns: min-content auto min-content;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: var(--b4);
  }
  .siteNav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2em;
    width: 100vw;
    max-width: var(--break1);
    background-color: var(--b3);
  }
</style>

<div class='nav'>
  <button on:click={toggle} class='vertCenter'>
    <Icon name='menu' />
  </button>
  <input type='search' placeholder='search' />
  <div>Logo</div>
</div>
{#if isOpen}
<div class='siteNav' on:click={()=>isOpen = false}>
  <SiteNav />
</div>
{/if}