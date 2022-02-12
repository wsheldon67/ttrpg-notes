import { col } from "$lib/db/server";

export async function get(r) {
  var username
  const res = await col('campaign',r).findOne(({_id, user}) => {
    username = user
    return {
      query: {_id}
    }
  })
  res.body = {campaign: res.body, user: username}
  return res
}