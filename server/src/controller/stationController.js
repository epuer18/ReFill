import connectDB from "../db/db.js";
import { ObjectId } from "mongodb";

function stationDb() {
    const me = {};
    me.createStation = async (station) => {
      const { client, collection } = await connectDB("stations");
      const res = await collection.insertOne({
        location: station.location,
        description: station.description,
      });
      try {
        return res;
      } finally {
        await client.close();
      }
    };

    
}