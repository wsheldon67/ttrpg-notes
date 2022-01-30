
export async function find(url) {
  const res = await fetch(`/notes/all`,{method: 'POST'})
  const txt = await res.json()
  if (res.ok) {return txt}
  else {throw new Error(txt)}
}