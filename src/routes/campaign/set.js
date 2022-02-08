export async function post({request}) {
  const data = await request.json()
  // TODO the server should validate that the user has access to this campaign before setting it
  verbose(`Setting campaign to ${data}`)
  return {
    headers: {
      'set-cookie': `campaign=${data}; Path=/`
    }
  }
}