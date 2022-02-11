export const campaign_shell = {
  "_id": { "$oid": "620544c557f8957d3bf6dd2a" },
  "user": "", "campaign": "",
  "time": { "second": 0, "minute": 0, "hour": 0, "day": 0, "month": 0, "year": 0 },
  "settings": {
    "time": {
      "months_in_year": 12,
      "days_in_month": 30,
      "hours_in_day": 24,
      "pm_switch": 12,
      "one_based": true,
      "weekdays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "next_day_time": { "hour": 8, "minute": 0, "second": 0 }
    }
  },
  "users": [{ "user": "", "role": "owner" }],
  "roles": {
    "player": { "set_time": false }
  }
}