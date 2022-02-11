import { campaign as store } from "./stores/campaign";
import { get } from "svelte/store";
import { parse } from "./db/cookie";

export function permission(key) {
  const campaign = get(store)
  const user = parse(document.cookie).user
  const role = campaign.users.find(el => el.user === user).role
  if (role === 'owner'){return true}
  return campaign.roles[role][key]
}