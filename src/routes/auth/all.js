import { col } from "$lib/db/server";

export async function get(r) {
  return await col('campaign', r, false, true).find(({user}) => {
    return {
      query: {'users.user': user},
      projection: {campaign: 1}
    }
  })
}