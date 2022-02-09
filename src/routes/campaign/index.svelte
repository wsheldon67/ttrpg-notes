<script>
  import { post } from '$lib/db/client'
  import {campaign as store} from '$lib/stores/campaign'

  let promise = post('/campaign/all')

  async function setCampaign(e) {
    const cmpdata = await post('/campaign/set',e.target.value)
    store.set(cmpdata, true)
  }
  // TODO select should start on current campaign
</script>
{#await promise}
<p>Loading...</p>
{:then campaigns}
  <select on:change={setCampaign}>
  {#each campaigns as campaign}
    <option>{campaign.name}</option>
  {/each}
  </select>
{:catch err}
<p>{err.message}</p>
{/await}