<script>
  import { goto } from "$app/navigation";

  import { get, post } from "$lib/db/client";
  import { campaign as store} from '$lib/stores/campaign'
  import { settings } from '$lib/stores/settings'
  import { time } from '$lib/stores/time'

  let promise = get('./all')
  async function setCampaign(e){
    await post('./set',e.target.value)
    goto('/app')
  }
</script>
<select on:change={setCampaign} >
  <option></option>
{#await promise}
Loading...
{:then campaigns}
{#each campaigns as campaign}
  <option>{campaign.campaign}</option>
{/each}
{/await}
</select>