import { campaign as store } from "./stores/campaign";
import { get } from "svelte/store";
import { parse } from "./db/cookie";

export function permission(key) {
  console.trace('Depreciated, please use the derived store.')
  const campaign = get(store)
  if (typeof(document) === 'undefined'){return}
  const user = parse(document.cookie).user
  const srole = campaign.users.find(el => el.user === user).role
  if (srole === 'owner'){return true}
  return campaign.roles[srole][key]
}

export function role() {
  console.trace('Depreciated, please use the derived store.')
  const campaign = get(store)
  if (typeof(document) === 'undefined'){return}
  const user = parse(document.cookie).user
  return campaign.users.find(el => el.user === user).role
}