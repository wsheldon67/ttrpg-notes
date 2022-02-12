import { derived } from 'svelte/store'
import {campaign} from './campaign'
import {user} from './user'
// take from 2 stores, campaign && username

export const permission = derived(
  [campaign, user],
  ([$campaign, $user]) => {
    const srole = $campaign.users.find(el => el.user === $user).role
    if (srole === 'owner'){return 'owner'}
    return $campaign.roles[srole]
  }
)

export function get(store, key) {
  if (store === 'owner') {return true}
  else {return store[key]}
}