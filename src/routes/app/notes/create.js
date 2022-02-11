import { col } from "$lib/db/server";

export async function post(r) {
  console.log('did we make it here')
  return col('notes',r).insertOne(({user, campaign, data}) => {
    return {
      document: {...data, user, campaign}
    }
  })
}