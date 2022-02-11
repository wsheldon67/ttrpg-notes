import { col } from "$lib/db/server";

export async function post(r) {
  return col('campaign',r).updateOne(({user, campaign, data}) => {
    return {
      filter: {user, campaign},
      update: {$set:{time: data}}
    }
  })
}