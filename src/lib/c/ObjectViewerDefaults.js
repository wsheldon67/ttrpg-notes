import * as pretty from "$lib/pretty";
import { settings } from '$lib/stores/settings'
import { get } from 'svelte/store'

export const defaults = {
  _id: 'ignore',
  campaign: 'ignore',
  type: 'ignore',
  body: 'ignore',
  time: (o) => pretty.time(o, get(settings).time),
}