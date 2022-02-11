<script>
  import { goto } from "$app/navigation";

  import { get, post } from "$lib/db/client";
  import { campaign as store} from '$lib/stores/campaign'
  import { settings } from '$lib/stores/settings'
  import { time } from '$lib/stores/time'

  let promise = get('./all')
  let campaign_name
  function setCampaign(){
    const camp_data = post('./set',campaign_name)
    store.set(camp_data, true)
    settings.set(camp_data.settings, true)
    time.set(camp_data.time, true)
    goto('/app')
  }
</script>
<select on:change={setCampaign} bind:value={campaign_name}>
  <option></option>
{#await promise}
Loading...
{:then campaigns}
{#each campaigns as campaign}
  <option>{campaign.campaign}</option>
{/each}
{/await}
</select>