export async function post () {
  return {
    status: 200,
    headers: {
      'set-cookie': `campaign=${body.campaign}; Path=/`
    }
  }
}