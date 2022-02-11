import { settings } from '../settings'
import { get } from 'svelte/store'


export function settle(ob, as_is) {
  const {
    months_in_year,
    days_in_month,
    hours_in_day,
    one_based
  } = ob.settings

  const units = {
    'second': 60,
    'minute': 60,
    'hour': hours_in_day,
    'day': days_in_month,
    'month': months_in_year,
    'year': Infinity
  }

  const sob = {...ob}

  if (one_based && !as_is) {
    sob.month--
    sob.day--
  }

  let carry_over = 0

  for (let unit in units) {
    const overflow = units[unit]
    let set_value = sob[unit] + carry_over

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