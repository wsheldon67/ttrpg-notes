import { campaign } from "$lib/stores/campaign";

export async function set_campaign(name) {
  return campaign.get()
}