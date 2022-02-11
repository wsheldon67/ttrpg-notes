<script context='module'>
  import {campaign} from '$lib/stores/campaign'
  import {settings} from '$lib/stores/settings'
  import {time} from '$lib/stores/time'
  export async function load({fetch}) {
    const data = await fetch('/auth/campaign/by-name',{
      method: 'GET',
    })
    const camp = await data.json()
    campaign.set(camp, true)
    time.set({...camp.time, settings: camp.settings.time},true)
    settings.set(camp.settings, true)
    return {status: 204}
  }
</script>

<script>
	import '../../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'
</script>

<TopNav />
<slot />
<BottomNav />