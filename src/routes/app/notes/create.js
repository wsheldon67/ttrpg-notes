import { col } from "$lib/db/server";

export async function post(r) {
  return col('notes',r).insertOne(({user, _id, data}) => {
    return {
      document: {...data, user, campaign: _id}
    }
  }, true)
}