import { cookie, replaceOne } from "$lib/db/server";

export async function post({ request }) {
  const data = request.json()
  const { user, campaign } = cookie(request)
  return replaceOne('campaign', {user, name: campaign}, data, {upsert: true})
}