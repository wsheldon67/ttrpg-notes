import { derived, writable } from "svelte/store";
import { post } from '$lib/db/client'
import { settings } from './settings'
import { time } from "./time";
import { permissions } from './permissions'
import { campaign_shell } from './campaign_shell.js'

var initialized = false

function create_store() {
  const { subscribe, set, update} = writable(campaign_shell)
  return {
    subscribe,
    set: (campaign_object, dontSave) => {
      if(!dontSave){post('/campaign/new', campaign_object)}
      set(campaign_object)
    },
    update: (key, value) => {
      update(o => o[key] = value)
      post('/campaign/update',{key, value})
    },
    get: async () => {
      if (initialized) {return}
      const camp_data = await post('/campaign/set')
      console.log(camp_data)
      set(camp_data)
      time.set(camp_data.time)
      settings.set(camp_data.settings)
      initialized = true
    }
  }
}
export const campaign = create_store()

// FIXME store can't guarantee it has fetched, so subscribers should handle has not fetched yet scenario

export const permission = derived(
  campaign,
  permissions
)