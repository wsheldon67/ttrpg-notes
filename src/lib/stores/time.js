import { post } from '$lib/db/client'
import { writable, derived, get } from 'svelte/store'
import { settings } from './settings'
import { settle } from './time/settle'
import { display } from './time/display'

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
        const settled = settle(res, true)
        post('/time/set', settled)
        return settled
      })
    },
    next_day: (amt) => {
      update((old) => {
        const res = {...old}
        res.day += amt
        const {hour, minute, second} = get(settings).time.next_day_time
        res.hour = hour
        res.minute = minute
        res.second = second
        const settled = settle(res, true)
        post('/time/set', settled)
        return settled
      })
    }
  }
}

export const time = create_store()


export const display_time = derived(
  time,
  display
)