import { writable } from "svelte/store";
import { post } from '$lib/db/client'

function create_store() {
  const { subscribe, set, update} = writable({})
  return {
    subscribe,
    set: (campaign_object, initial) => {
      if(!initial){post('/campaign/new', campaign_object)}
      set(campaign_object)
    },
    update: (key, value) => {
      update(o => o[key] = value)
      post('/campaign/update',{key, value})
    }
  }
}
export const campaign = create_store()