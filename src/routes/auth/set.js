import { col } from "$lib/db/server";

export async function post (r) {
  const {body} = await col('campaign',r).findOne(({user, data}) => {
    return {
      query: {user, campaign: data}
    }
  })
  return {
    body,
    status: 200,
    headers: {
      'set-cookie': `campaign=${body.campaign}; Path=/`
    }
  }
}