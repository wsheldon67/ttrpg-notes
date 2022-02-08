<script>
  import { post } from '$lib/db/client'

  let promise = post('/campaign/all')

  function setCampaign(e) {
    post('/campaign/set',e.target.value)
  }
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