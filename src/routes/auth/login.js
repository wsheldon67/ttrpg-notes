import { col } from "$lib/db/server";

export async function post(r) {
  try {
    var user
    const res = await col('user',r,true,true).findOne(({data}) => {
      user = data
      return {
        query: {user}
      }
    })
    return {
      ...res,
      headers: {
        'set-cookie': [`user=${user}; Path=/`,`campaign=''; Path=/`]
      }
    }
  } catch (err) {
    console.log(err)
    return {
      status: 300,
      headers: {
        'location': `/campaign`
      }
    }
  }
}