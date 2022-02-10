import { writable } from "svelte/store";
import { post } from '$lib/db/client'

function create_store() {
  const {set, update, subscribe} = writable({})
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