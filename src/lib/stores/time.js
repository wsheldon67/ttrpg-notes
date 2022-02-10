import { post } from '$lib/db/client'
import { writable } from 'svelte/store'
import { settle } from './time/settle'
export { display_time } from './time/display'

function create_store() {
  const {subscribe, set, update} = writable({
    year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0
  })
  return {
    subscribe,
    set: (time_ob, dontSave) => {
      const res = settle(time_ob)
      set(res)
      if (!dontSave) {post('/time/set', res)}
    },
    set_unit: (amt, unit) => {
      update((old) => {
        const res = settle({...old, [unit]: amt})
        post('/time/set', res)
        return res
      })
    },
    add: (amt, unit) => {
      update((old) => {
        const res = {...old}
        res[unit] += amt
        const settled = settle(res)
        post('/time/set', settled)
        return settled
      })
    }
  }
}

export const time = create_store()