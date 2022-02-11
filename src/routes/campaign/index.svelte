<script>
  import { post } from '$lib/db/client'
  import { set_campaign } from '$lib/stores/set_campaign'
  import { campaign as store } from '$lib/stores/campaign'
  import { goto } from '$app/navigation';

  let promise = post('/campaign/all')

  async function setCampaign(e) {
    set_campaign(e.target.value)
    .then(()=> {goto('/')})
  }
</script>
{#await promise}
<p>Loading...</p>
{:then campaigns}
  <select on:change={setCampaign} value={$store ? $store.campaign : ''}>
  {#each campaigns as campaign}
    <option>{campaign.campaign}</option>
  {/each}
  </select>
{:catch err}
<p>{err.message}</p>
{/await}