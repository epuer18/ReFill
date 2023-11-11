import connectDB from "../db/db.js";
import { ObjectId } from "mongodb";

/*
"name": "MIT Engineering Building Drinking Fountain",
    "description": "Located on the third floor near the labs, this water fountain is showing its age. Users suggest a thorough cleaning for better hygiene.",
    "access_type": "Inside Campus (MIT)",
    "status": "Could be cleaner",
    "zip_code": "02139",
    "photo_url": ""
*/
function stationDb() {
  const me = {};
  me.createStation = async (station) => {
    const { client, collection } = await connectDB("stations");
    const res = await collection.insertOne({
      name: station.name,
      description: station.description,
      access_type: station.access_type,
      status: station.status,
      zip_code: station.zip_code,
    });
    try {
      return res;
    } finally {
      await client.close();
    }
  };

  me.getStations = async function (query = "") {
    const { client, collection } = await connectDB("stations");
    let queryObj = {};
    console.log("Hi" + query);
    if (query != "") {
      queryObj = { zip_code: { $regex: `${query}`, $options: "i" } };
    }

    try {
      const stations = await collection.find(queryObj).limit(21).toArray();

      return stations;
    } finally {
      await client.close();
    }
  };

  me.findStationById = async (stationId) => {
    const { client, collection } = await connectDB("stations");

    try {
      const station = await collection.findOne({ _id: stationId });
      return station;
    } catch (error) {
      throw error; // Or handle the error as needed
    } finally {
      await client.close();
    }
  };

  return me;
}

const stationDB = stationDb();

export default stationDB;
