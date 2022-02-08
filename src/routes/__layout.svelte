<script>
  import {onload} from './_onload'
	import '../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'
  import { onMount } from 'svelte';

  onMount(onload)
</script>

<TopNav />
<slot />
<BottomNav />