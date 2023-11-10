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

    me.getStations = async function (query = {}) {
      const { client, collection } = await connectDB("stations");

      try {
        const stations = await collection.find(query).toArray();
  
        return stations;
      } finally {
        await client.close();
      }
    };

    return me;
}

const stationDB = stationDb();

export default stationDB;