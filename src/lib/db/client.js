export async function post(url, data={}) {
  console.log(url, data)
  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  try {
    return await res.json()
  } catch (err) {
    console.log(err)
    return {}
  }
}

export async function get(url) {
  console.log(url, 'get')
  const res = await fetch(url, {
    method: 'GET',
  })
  try {
    return await res.json()
  } catch (err) {
    console.log(err)
    return {}
  }
}

// return a promise