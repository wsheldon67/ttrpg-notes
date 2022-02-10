import { post } from '$lib/db/client'
import { settings } from './settings'
import { derived, writable, get } from 'svelte/store'

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

function settle(ob) {
  const {
    months_in_year,
    days_in_month,
    hours_in_day
  } = get(settings).time

  const units = {
    'second': 60,
    'minute': 60,
    'hour': hours_in_day,
    'day': days_in_month,
    'month': months_in_year,
    'year': Infinity
  }

  const sob = {second: 0}
  let carry_over = 0

  for (let unit in units) {
    const overflow = units[unit]
    let set_value = ob[unit] + carry_over

    if (set_value >= overflow || set_value < 0) {
      carry_over = Math.floor(set_value / overflow)
      set_value -= carry_over * overflow
    } else {
      carry_over = 0
    }
    sob[unit] = Number(set_value)
  }

  return sob
}
// TODO time stored as 0-based, mil. need to display w/ user pref on those items

export const display_time = derived(
  time,
  ($time) => {
    
    return $time
  }
)