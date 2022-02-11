import { writable } from "svelte/store";
import { post } from '$lib/db/client'
import { campaign_shell } from "./campaign_shell";

function create_store() {
  const {set, update, subscribe} = writable(campaign_shell.settings)
  return {
    subscribe,
    set: (settings_ob, dontSave) => {
      if (!dontSave) {post('/settings/set',settings_ob)}
      set(settings_ob)
    },
    update: (key, value) => {
      update(o => {
        return {...o, [key]: value}
      })
      post('/settings/set-kv',{key, value})
    }
  }
}
export const settings = create_store()