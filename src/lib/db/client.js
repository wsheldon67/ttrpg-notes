import { goto } from "$app/navigation"

export async function post(url, data={}) {
  console.log(url)
  try {
    const res = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const txt = await res.json()
    if (res.ok) {
      console.debug(url,txt)
      return txt
    } else if (res.status >= 300 && res.status < 400) {
      goto(res.headers.get('location'))
      return {res}
    }
    else {throw new Error(txt)}
  } catch(err){console.log(err)}
}