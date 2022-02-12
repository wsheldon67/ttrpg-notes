import { col } from "$lib/db/server";

export async function post(r) {
  return col('campaign',r).updateOne(({user, _id, data}) => {
    return {
      filter: {user, _id},
      update: {$set:{time: data}}
    }
  })
}