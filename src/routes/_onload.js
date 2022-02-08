import { game_time } from '$lib/time'
import { post } from '$lib/db/client'

export async function onload() {
  const ob = await post('/time/get-global')
  if (ob[0].time) {
    game_time.set(ob[0].time, true)
  }
}