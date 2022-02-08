import { writable } from "svelte/store";
import { post } from '$lib/db/client'

function create_time() {
  const { subscribe, set, update } = writable({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  })
  return {
    subscribe,
    set: (time, clientOnly) => {
      const clean_time = clean(time)
      if (!clientOnly){
        post('/time/set-global', clean_time)
      }
      set(clean_time)
    },
    update: (func) => {
      // TODO implement time updater
      update(func)
    }
  }
}
export const game_time = create_time()

function clean(time) {
  // TODO handle overflows, per this campaign's time system
  return time
}