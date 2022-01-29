import clientPromise from "$lib/db";

export async function post (req) {
  const connection = await clientPromise;
  const db = connection.db('ttrpg')
  const col = db.collection('notes')
  const notes = await col.find().toArray()
  console.log(notes)
  return {
    body: notes
  }
}