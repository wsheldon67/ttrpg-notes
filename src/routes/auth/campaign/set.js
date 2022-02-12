export async function post ({request}) {
  const campaign = await request.json()
  return {
    status: 200,
    headers: {
      'set-cookie': `_id=${campaign}; Path=/`
    }
  }
}