import { ObjectId } from "mongodb";
import { cookie } from "./cookie";
import clientPromise from "./db-connect"
const connection = await clientPromise;
const db = connection.db('ttrpg')

export {cookie} from './cookie'

export function col(collection, {request}, ignore_missing_user, ignore_missing_campaign) {
  const coll = db.collection(collection)
  const cookies = cookie(request)
  const _id = new ObjectId(cookies._id)
  const user = cookies.user

  function needed_info() {
    if (!user && !ignore_missing_user){return false}
    if (!_id && !ignore_missing_campaign){return false}
    return true
  }
  function redirect() {
    let location
    if (!user && !ignore_missing_user) {location = '/auth/login'}
    if (!_id && !ignore_missing_campaign) {location = '/auth/campaign'}
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
      const {query, projection} = await func({user, _id, data})
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
    const {query, projection} = await func({user, _id, data})
    verbose('Executing findOne with', query, projection)
    const body = await coll.findOne(query)
    verbose('Responding with', body)
    return {status: 200, body}
  }
  async function updateOne(func) {
    if (!needed_info()) {return redirect()}
    const data = await request.json()
    const {filter, update, options} = await func({user, _id, data})
    verbose(`Executing updateOne with`, filter, update, options)
    const body = await coll.updateOne(filter, update, options)
    return {status: 200, body}
  }
  async function insertOne(func, with_time) {
    if (!needed_info()) {return redirect()}
    const data = await request.json()
    if (with_time) {
      data.time = await get_time(user, _id)
    }
    const {document} = await func({user, _id, data})
    verbose('Executing insertOne with', document)
    const body = await coll.insertOne(document)
    return {status: 200, body}
  }
  return {find, findOne, updateOne, insertOne}
}

async function get_time(user, _id){
  const coll = db.collection('campaign')
  const data = await coll.findOne({'users.user': user, _id})
  return data.time
}

export async function permission(user, _id, key) {
  const coll = db.collection('campaign')
  const data = await coll.findOne({'users.user': user, _id})
  const srole = data.users.find(el => el.user === user).role
  if (srole === 'owner'){return true}
  return data.roles[srole][key]
}