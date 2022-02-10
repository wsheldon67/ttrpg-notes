<script>
  import {onload} from './_onload'
	import '../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'

  let promise = onload()
  // TODO what happens if a campaign is not set? needs to go to user/campaign selector
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