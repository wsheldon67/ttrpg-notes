import { cookie, find } from "$lib/db/server";

export async function post({ request }) {
  const user = cookie(request).user
  return find('campaign',{user})
}