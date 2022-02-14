import { parse } from "$lib/db/cookie"

const lgv = true
global.verbose = (...thing) => {if(lgv){console.log(...thing)}}

// TODO redirect to /campaign if there is not a campaign chosen

export async function handle ({event, resolve}) {
  const cookies = parse(event.request.headers.get('cookie') || '')
  console.log('hook cookies:', cookies)
  event.locals.user = cookies.user || ''
  event.locals.campaign = cookies.campaign || ''
  return resolve(event)
}

export function getSession({locals}) {
  return {
    user: locals.user,
    campaign: locals.campaign
  }
}