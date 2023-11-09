import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (collectionChosen) => {
  // const mongoUrl = process.env.MONGO_URL;
  // console.log(process.env.MONGO_URL);
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  const db = await client.db("Refill");
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
