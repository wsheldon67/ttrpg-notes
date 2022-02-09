import { col } from "$lib/db/server"

export async function post(r) {
  return await col('campaign',r).findOne(({user, campaign}) => {
    return {
      query: {user, campaign}
    }
  })
}