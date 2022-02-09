import { col } from "$lib/db/server"

export async function post(r) {
  var campaign
  // TODO the server should validate that the user has access to this campaign before setting it
  const res = await col('campaign',r).findOne(({user, data}) => {
    campaign = data
    return {
      query: {user, campaign}
    }
  })
  verbose(`Setting campaign to ${campaign}`)
  return {
    ...res,
    headers: {
      'set-cookie': `campaign=${campaign}; Path=/`
    }
  }
}