import { find } from "$lib/db";


export async function post (req) {
  const all_notes = await find('notes')
  return {
    body: all_notes
  }
}