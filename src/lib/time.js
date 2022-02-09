import { campaign } from "./stores/campaign";
import { derived } from "svelte/store";

export const current = derived(
  campaign,
  $campaign => $campaign.time
)

/**
 * Set full time
 * @param {object|number} time {year: 0, month: 0 etc} OR amt if using with unit
 * @param {string} [unit] year, month, etc. If provided, will only set that unit
 */
export function set(time, unit) {
  if (unit) {
    campaign.update('time', settle({...campaign.time, [unit]: time}))
  } else {
    campaign.update('time',settle(time))
  }
}

/**
 * Add or subtract time
 * @param {number} amt 
 * @param {string} unit year, month, etc
 */
export function add(amt, unit) {
  new_time = {...campaign.time}
  new_time[unit] += amt
  campaign.update('time', settle(new_time))
}

/**
 * Takes a time object and adjusts for overflow
 */
function settle(time) {
  // TODO function to settle time per overflow settings
  return time
}