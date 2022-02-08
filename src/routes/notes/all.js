import { find } from "$lib/db/server";


export async function post ({request}) {
  const user = request.headers.get('cookie').split('=')[1]
  return find('notes',{user})
}