import { col } from "$lib/db/server";

export async function post (r) {
  const res = await col('user', r, true, true).findOne(({data}) => {
    return {
      query: data
    }
  })
  verbose(`${res.body[0].name} logging in.`)
  return {
    ...res,
    headers: {
      'set-cookie': `user=${res.body[0].name}; Path=/`
    }
  }
}