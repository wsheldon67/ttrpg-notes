<script>
  import { goto } from "$app/navigation";
  import { get, post } from "$lib/db/client";

  let promise = get('/auth/campaign/all')
  async function setCampaign(e){
    await post('/auth/campaign/set',e.target.value)
    goto('/app')
  }
</script>
<select on:change={setCampaign} >
  <option></option>
{#await promise}
Loading...
{:then campaigns}
{#each campaigns as campaign}
  <option value={campaign._id}>{campaign.campaign}</option>
{/each}
{/await}
</select>