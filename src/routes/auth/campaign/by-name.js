import { col } from "$lib/db/server";

export async function get(r) {
  return col('campaign',r).findOne(({user, campaign}) => {
    return {
      query: {'users.user': user, campaign}
    }
  })
}