import { find } from "$lib/db/server";


export async function post ({request}) {
  const user = request.headers.get('cookie').split('=')[1]
  const all_notes = await find('notes',{user})
  return {
    body: all_notes
  }
}