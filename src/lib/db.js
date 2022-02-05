import clientPromise from "$lib/db-connect"
const connection = await clientPromise;
const db = connection.db('ttrpg')

export async function find(collection, query, projection) {
  const col = db.collection(collection)
  return await col.find(query, projection).toArray()
}

export async function updateOne(collection, filter, update, options) {
  const col = db.collection(collection)
  return await col.updateOne(filter, update, options)
}