<script>
  import {onload} from './_onload'
	import '../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'

  let promise = onload()
</script>

{#await promise}
Loading...
{:then}
  <TopNav />
  <slot />
  <BottomNav />
{:catch error}
{error.message}
{/await}