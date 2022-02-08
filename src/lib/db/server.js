import clientPromise from "$lib/db/db-connect"
const connection = await clientPromise;
const db = connection.db('ttrpg')

export async function find(collection, query, projection) {
  const col = db.collection(collection)
  const res = await col.find(query, projection).toArray()
  return {
    body: res,
    status: 200,
  }
}

export async function updateOne(collection, filter, update, options) {
  const col = db.collection(collection)
  return await col.updateOne(filter, update, options)
}

export function cookie(request) {
  return parse(request.headers.get('cookie'))
}
function parse(cookieString) {
  let result = {};
  let cookies = cookieString ? cookieString.split('; ') : [];

  for (let cookie of cookies) {
      let parts = cookie.split('=');
      let value = parts.slice(1).join('=');
      let name = readValue(parts[0]).replace(/%3D/g, '=');
      result[name] = readValue(value);
  }

  return result;
}
function readValue(value) {
  return value.replace(/%3B/g, ';');
}