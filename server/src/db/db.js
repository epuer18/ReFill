import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// const url =
//   "mongodb+srv://qiwenxin98:Zjjxwjp@cluster0.chnfjby.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// async function connectDB() {
//   try {
//     await client.connect();
//     return client.db("FurFriendz");
//   } catch (error) {
//     throw new Error("Failed to connect to the database: " + error.message);
//   }
// }

// module.exports.client = client;
// module.exports.connectDB = connectDB;

const connectDB = async (collectionChosen) => {
  const mongoUrl =
    "mongodb+srv://qiwenxin98:Zjjxwjp@cluster0.chnfjby.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(mongoUrl);
  await client.connect();
  const db = await client.db("Refill");
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
