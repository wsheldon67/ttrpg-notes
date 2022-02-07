import { updateOne } from "$lib/db"

export async function post({ request }) {
  const name = await request.json()
  console.log(name)
  const res = updateOne('user',{name},{$set:{name}},{upsert: true})
  return {
    status: 200,
    body: res
  }
}