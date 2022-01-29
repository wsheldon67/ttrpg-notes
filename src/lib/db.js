import clientPromise from "$lib/db-connect"

export async function find(collection, query, projection) {
  const connection = await clientPromise;
  const db = connection.db('ttrpg')
  const col = db.collection(collection)
  return await col.find(query, projection).toArray()
}