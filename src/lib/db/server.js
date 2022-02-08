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
// TODO make database operations more dev friendly