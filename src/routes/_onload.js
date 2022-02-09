import { goto } from "$app/navigation";
import { post } from "$lib/db/client";

import { campaign } from "$lib/stores/campaign";
import { time } from '$lib/stores/time'


export async function onload() {
  try {
    const campaign_data = await post('/campaign/by-name')
    campaign.set(campaign_data, true)
    time.set(campaign_data.time, true)
  } catch (err) {
    console.debug('No campaign, redirecting',err)
    goto('/campaign')
  }
}