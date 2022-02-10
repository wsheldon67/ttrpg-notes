<script>
  import { post } from '$lib/db/client'
  import { set_campaign } from '$lib/stores/set_campaign'

  let promise = post('/campaign/all')

  async function setCampaign(e) {
    set_campaign(e.target.value)
  }
  // TODO select should start on current campaign
</script>
{#await promise}
<p>Loading...</p>
{:then campaigns}
  <select on:change={setCampaign}>
  {#each campaigns as campaign}
    <option>{campaign.campaign}</option>
  {/each}
  </select>
{:catch err}
<p>{err.message}</p>
{/await}