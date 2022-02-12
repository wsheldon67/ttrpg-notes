import { col, permission } from "$lib/db/server";


export async function post (r) {
  return col('notes',r).find( async ({user, campaign}) => {
    const role = await permission(user, campaign, 'view_gm_notes') ? {} : 'player'
    return {
      query: {user, campaign, role}
    }
  })
}