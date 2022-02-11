import { cookie, find } from "$lib/db/server";

export async function post ({request}) {
  const {user, campaign} = cookie(request)
  const query = {
    user, campaign,
    type: 'time'
  }
  verbose(`${user} requested game time for ${campaign}`)
  return find('generic', query)
}