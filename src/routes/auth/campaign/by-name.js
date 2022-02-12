import { col } from "$lib/db/server";

export async function get(r) {
  return col('campaign',r).findOne(({_id}) => {
    return {
      query: {_id}
    }
  })
}