import { writable } from "svelte/store";
import { post } from '$lib/db/client'
import { campaign_shell } from './campaign_shell.js'


function create_store() {
  const { subscribe, set, update} = writable(campaign_shell)
  return {
    subscribe,
    set: (campaign_object, dontSave) => {
      if(!dontSave){post('/auth/campaign/set', campaign_object)}
      set(campaign_object)
      console.log('campaign store was set')
    },
    update: (key, value) => {
      update(o => o[key] = value)
      post('/auth/campaign/update',{key, value})
    }
  }
}
export const campaign = create_store()