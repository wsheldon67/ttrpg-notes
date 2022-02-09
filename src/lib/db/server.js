import { cookie } from "./cookie";
import clientPromise from "./db-connect"
const connection = await clientPromise;
const db = connection.db('ttrpg')

export {cookie} from './cookie'

export async function find(collection, query, projection) {
  console.trace(`Depreciated - switch to col()`)
  const coll = db.collection(collection)
  const res = await coll.find(query, projection).toArray()
  return {
    body: res,
    status: 200,
  }
}

export async function updateOne(collection, filter, update, options) {
  console.trace(`Depreciated - switch to col()`)
  const coll = db.collection(collection)
  return await coll.updateOne(filter, update, options)
}

export async function replaceOne(collection, filter, replacement, options) {
  console.trace(`Depreciated - switch to col()`)
  const coll = db.collection(collection)
  const res = await coll.replaceOne(filter, replacement, options)
  return {
    body: res,
    status: 200
  }
}

export function col(collection, {request}) {
  const coll = db.collection(collection)
  const {user, campaign} = cookie(request)

  async function find(func) {
    const data = await request.json()
    const {query, projection} = func({user, campaign, data})
    verbose(`Executing find with`,query, projection)
    const body = await coll.find(query, projection).toArray()
    verbose(`Responding with`, body)
    return {
      body,
      status: 200
    }
  }
  async function findOne(func) {
    const data = await request.json()
    const {query, projection} = func({user, campaign, data})
    verbose('Executing findOne with', query, projection)
    const body = await coll.findOne(query,projection)
    verbose('Responding with', body)
    return {
      body, status: 200
    }
  }
  async function updateOne(func) {
    const data = await request.json()
    const {filter, update, options} = func({user, campaign, data})
    verbose(`Executing updateOne with`, filter, update, options)
    const body = await coll.updateOne(filter, update, options)
    verbose(`Responding with`, body)
    return {body, status: 200}
  }
  return {find, findOne, updateOne}
}