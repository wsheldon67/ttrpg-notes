<script>
	import '../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'
</script>

<TopNav />

<slot />

<BottomNav />