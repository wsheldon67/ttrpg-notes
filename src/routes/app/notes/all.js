import { col, permission } from "$lib/db/server";


export async function post (r) {
  return col('notes',r).find( async ({user, _id}) => {
    const view_gm_notes = await permission(user, _id, 'view_gm_notes')
    if (view_gm_notes) {
      return {campaign: _id}
    } else {
      return {campaign: _id, role: 'player'}
    }
  })
}