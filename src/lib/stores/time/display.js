import { time } from "../time"

// TODO time stored as 0-based, mil. need to display w/ user pref on those items

export const display_time = derived(
  time,
  ($time) => {
    
    return $time
  }
)