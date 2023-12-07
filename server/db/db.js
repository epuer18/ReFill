import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (collectionChosen) => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();

  console.log("Connecting to Mongo URL: " + process.env.MONGO_URL.slice(0, 20));
  //await client.connect();
  const db = await client.db("Refill");

  console.log("Connected to mongo", !!db);
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
