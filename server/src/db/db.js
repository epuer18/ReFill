import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (collectionChosen) => {

  const mongoUrl = process.env.MONGODB_URI;
  const client = new MongoClient(mongoUrl);
  console.log("Established Connection");

  //await client.connect();
  const db = await client.db("Refill");
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
