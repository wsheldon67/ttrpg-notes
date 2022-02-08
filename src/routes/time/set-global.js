import { updateOne } from "$lib/db/server";

export async function post({request}) {
  const time = await request.json()
  const filter = {
    type: 'time',
    user: 'Bob',
    campaign: 'Oorb'
  }
  const update = {
    $set: {time}
  }
  const options = {upsert: true}
  const res = await updateOne('generic', filter, update, options)
  return {
    body: res,
    status: 200
  }
}