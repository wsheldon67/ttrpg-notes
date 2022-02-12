export async function post({request}) {
  const user = await request.json()
  return {
    status: 200,
    headers: {
      'set-cookie': [`user=${user}; Path=/`,`campaign=''; Path=/`]
    }
  }
}