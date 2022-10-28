import { MongoClient } from 'mongodb'

const url = "mongodb+srv://oldsadpanda:1256assa@cluster0.u1tjx.mongodb.net/?retryWrites=true&w=majority"

const dbo = await MongoClient.connect(url, async function(err, db) {
  if (err) throw err;
  return db;
  console.log("Database created!");
  // db.close();
});


export default dbo;