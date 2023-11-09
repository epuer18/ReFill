import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// const username = encodeURIComponent("qiwenxin98");
// const password = encodeURIComponent("Zjjxwjp");

const connectDB = async (collectionChosen) => {
<<<<<<< Updated upstream
  const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";

=======
  const mongoUrl =
    "mongodb+srv://qiwenxin98:Zjjxwjp@cluster0.chnfjby.mongodb.net/?retryWrites=true&w=majority";
>>>>>>> Stashed changes
  const client = new MongoClient(mongoUrl);
  await client.connect();
  const db = await client.db("Refill");
  const collection = db.collection(collectionChosen);
  return { client, collection };
};

export default connectDB;
