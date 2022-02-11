import { campaign as store } from "./stores/campaign";
import { get } from "svelte/store";
import { parse } from "./db/cookie";

export async function permission(key) {
  // FIXME maybe do this as a derived store?
  const campaign = get(store)
  if (typeof(document) === 'undefined'){return}
  const user = parse(document.cookie).user
  const role = campaign.users.find(el => el.user === user).role
  if (role === 'owner'){return true}
  return campaign.roles[role][key]
}