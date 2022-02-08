import { MongoClient } from "mongodb";
import { uri } from '../../secrets'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

clientPromise = client.connect()

export default clientPromise