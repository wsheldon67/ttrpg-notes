
export async function post(url, data={}) {
  const res = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  const txt = await res.json()
  if (res.ok) {return txt}
  else {throw new Error(txt)}
}