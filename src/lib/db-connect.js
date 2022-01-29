import { MongoClient } from "mongodb";
const uri = "mongodb+srv://wsheldon:5FnJsnasstGDuz2Q@pathfinder.7k1k9.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

clientPromise = client.connect()

export default clientPromise