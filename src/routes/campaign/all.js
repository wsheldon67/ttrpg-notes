import { col } from "$lib/db/server";

export async function post(r) {
  return col('campaign',r, false, true).find(({user}) => {
    return {
      query: {user},
      projection: {campaign: 1}
    }
  })
}