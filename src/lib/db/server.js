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

export function col(collection, {request}, ignore_missing_user, ignore_missing_campaign) {
  const coll = db.collection(collection)
  const {user, campaign} = cookie(request)
  console.log(user, campaign)

  function needed_info() {
    if (!user && !ignore_missing_user){return false}
    if (!campaign && ignore_missing_campaign){return false}
    return true
  }
  function redirect() {
    let location
    if (!user && !ignore_missing_user) {location = '/auth/login'}
    if (!campaign && ignore_missing_campaign) {location = '/auth/campaign'}
    return {
      status: 303,
      headers: {location}
    }
  }

  async function find(func) {
    if (!needed_info()) {return redirect()}
    try {var data = await request.json()}
    catch {var data = undefined}
    finally {
      const {query, projection} = func({user, campaign, data})
      verbose(`Executing find with`,query, projection)
      const body = await coll.find(query).project(projection||{}).toArray()
      verbose('Responding with', body)
      return {status: 200, body}
    }
  }
  async function findOne(func) {
    if (!needed_info()) {return redirect()}
    try {var data = await request.json()}
    catch {var data = undefined}
    const {query, projection} = func({user, campaign, data})
    verbose('Executing findOne with', query, projection)
    const body = await coll.findOne(query)
    verbose('Responding with', body)
    return {status: 200, body}
  }
  async function updateOne(func) {
    if (!needed_info()) {return redirect()}
    const data = await request.json()
    const {filter, update, options} = func({user, campaign, data})
    verbose(`Executing updateOne with`, filter, update, options)
    const body = await coll.updateOne(filter, update, options)
    return {status: 200, body}
  }
  async function insertOne(func) {
    if (!needed_info()) {return redirect()}
    const data = await request.json()
    const {document} = func({user, campaign, data})
    verbose('Executing insertOne with', document)
    const body = await coll.insertOne(document)
    return {status: 200, body}
  }
  return {find, findOne, updateOne, insertOne}
}