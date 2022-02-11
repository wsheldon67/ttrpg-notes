export async function post ({request}) {
  const campaign = await request.json()
  return {
    status: 200,
    headers: {
      'set-cookie': `campaign=${campaign}; Path=/`
    }
  }
}