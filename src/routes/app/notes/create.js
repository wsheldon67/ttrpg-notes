import { col } from "$lib/db/server";

export async function post(r) {
  return col('notes',r).insertOne(({user, campaign, data}) => {
    return {
      document: {...data, user, campaign}
    }
  }, true)
}