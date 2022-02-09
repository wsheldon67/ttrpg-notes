import { col } from "$lib/db/server"

export async function post(r) {
  var camp_name
  // TODO the server should validate that the user has access to this campaign before setting it
  const res = await col('campaign',r).findOne(({user, data}) => {
    camp_name = data
    return {
      query: {user, name: data}
    }
  })
  verbose(`Setting campaign to ${camp_name}`)
  return {
    ...res,
    headers: {
      'set-cookie': `campaign=${camp_name}; Path=/`
    }
  }
}