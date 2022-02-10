import { post } from "$lib/db/client";

import { campaign } from "$lib/stores/campaign";
import { time } from '$lib/stores/time'
import { settings } from "$lib/stores/settings";

export async function set_campaign(name) {
  const campaign_data = await post('/campaign/set',name)
  campaign.set(campaign_data, true)
  settings.set(campaign_data.settings, true)
  time.set(campaign_data.time, true, true)
}