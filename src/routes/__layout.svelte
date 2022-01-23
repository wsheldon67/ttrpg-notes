<script>
	import '../app.scss';
  import TopNav from './layout/_topnav.svelte'
  import BottomNav from './layout/_bottomnav.svelte'
</script>

<TopNav />

<slot />

<BottomNav />