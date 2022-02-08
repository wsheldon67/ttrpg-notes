<script>
  let campaigns = [
    {name: 'Fake Campaign'},
    {name: 'Totally Real Campaign'}
  ]
  // TODO get campaigns for curr user
  // TODO allow creation of new campaign, user is owner
</script>
<select>
  {#each campaigns as campaign (campaign.name)}
  <option>{campaign.name}</option>
  {/each}
</select>
<button>New Campaign</button>