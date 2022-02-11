import { updateOne, cookie } from "$lib/db/server";

// TODO this endpoint takes {key: xx, value: xx} and updates the current campaign with it

export async function post({request}) {
  const {user, campaign} = cookie(request)
  const data = request.json()
  return updateOne('campaign',{user, name: campaign}, {$set: {[data.key]:data.value}},{upsert: true})
}