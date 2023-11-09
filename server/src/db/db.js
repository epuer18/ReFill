import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const username = encodeURIComponent("qiwenxin98");
const password = encodeURIComponent("Zjjxwjp");

const connectDB = async (collectionChosen) => {
  const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";

  const client = new MongoClient(mongoUrl);
  await client.connect();
  const db = await client.db("Refill");
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
