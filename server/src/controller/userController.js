import connectDB from "../db/db.js";
import { ObjectId } from "mongodb";

function userDb() {
  const me = {};
  me.createUser = async (user) => {
    const { client, collection } = await connectDB("users");
    const res = await collection.insertOne({
      username: user.username,
      password: user.password,
    });
    try {
      return res;
    } finally {
      await client.close();
    }
  };

  me.getUserByID = async (id) => {
    const { client, collection } = await connectDB("users");
    const res = await collection.findOne({ _id: new ObjectId(id) });
    try {
      return res;
    } finally {
      await client.close();
    }
  };

  me.findUserByUsername = async (username) => {
    const { client, collection } = await connectDB("users");
    const res = await collection.findOne(username);
    try {
      return res;
    } finally {
      await client.close();
    }
  };

  return me;
}

export const userDB = userDb();
