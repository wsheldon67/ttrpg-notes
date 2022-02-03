<script>
  import SiteNav from './sitenav.svelte'
  import Icon from '$lib/c/Icon.svelte'

  let isOpen = false
  function toggle() {isOpen = !isOpen}
</script>
<style>
  .nav {
    display: grid;
    grid-template-columns: min-content auto min-content;
    width: 100%;
    gap: .25em;
    position: absolute;
    top: 0;
  }
  .siteNav {
    position: absolute;
    top: 2em;
  }
</style>

<div class='nav'>
  <button on:click={toggle}>
    <Icon name='menu' />
  </button>
  <input type='search' placeholder='search' />
  <div>Logo</div>
</div>
{#if isOpen}
<div class='siteNav'>
  <SiteNav />
</div>
{/if}