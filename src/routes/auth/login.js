import { find } from "$lib/db/server";

export async function post ({ request }) {
  const data = await request.json()
  const query = {
    name: data
  }
  const res = await find('user', query)
  verbose(`${res.body[0].name} logging in.`)
  return {
    ...res,
    headers: {
      'set-cookie': `user=${res.body[0].name}; Path=/`
    }
  }
}