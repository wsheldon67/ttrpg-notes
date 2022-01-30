<script>
  
  import SiteNav from './sitenav.svelte'

  let isOpen = false
  function toggle() {isOpen = !isOpen}
</script>

<div>
  <div on:click={toggle} />
  <form>
    <input type="search" placeholder="search" />
  </form>
  <a href="/" >Logo</a>
  <div>
    <SiteNav />
  </div>
</div>