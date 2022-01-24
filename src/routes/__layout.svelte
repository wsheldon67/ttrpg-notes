<script>
  import { Styles } from 'sveltestrap';
	import '../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'
</script>

<Styles />

<TopNav />
<slot />
<BottomNav />