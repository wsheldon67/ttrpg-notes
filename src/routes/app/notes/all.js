import { col, permission } from "$lib/db/server";


export async function post (r) {
  return col('notes',r).find( async ({user, _id}) => {
    const role = await permission(user, _id, 'view_gm_notes') ? {} : 'player'
    return {
      query: {user, campaign, role}
    }
  })
}