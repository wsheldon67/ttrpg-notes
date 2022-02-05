import { find } from "$lib/db";

export async function post ({req}) {
  const query = {
    user: 'Bob',
    type: 'time'
  }
  const time = await find('generic', query)
  return {
    body: time,
    status: 200
  }
}