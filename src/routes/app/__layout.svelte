<script context='module'>
  import {campaign} from '$lib/stores/campaign'
  import {settings} from '$lib/stores/settings'
  import {time} from '$lib/stores/time'
  import { user } from '$lib/stores/user';
  export async function load({fetch, session}) {
    console.log(session.user, session._id)
    if (!session.user) {return {status: 302, redirect: `/auth/login`}}
    if (!session._id) {return {status: 302, redirect: `/auth/campaign`}}
    const res = await fetch('/auth/campaign/by-name',{
      method: 'GET'
    })
    console.log(res.status)
    if (res.ok){
      try{var data = await res.json()}
      catch {return {props: {redirect: true}}}
      const camp = data.campaign
      user.set(data.user)
      campaign.set(camp, true)
      settings.set(camp.settings, true)
      time.set({...camp.time}, true, true)
      return {status: 204}
    } else {
      return res
    }
  }
</script>

<script>
	import '../../app.scss';
  import TopNav from './_layout/topnav.svelte'
  import BottomNav from './_layout/bottomnav.svelte'
  import { goto } from '$app/navigation';

  export let redirect = false

  if (redirect) {goto('/auth/login')}
</script>

<TopNav />
<slot />
<BottomNav />