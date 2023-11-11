import express, { json } from "express";
import data from "../db/station_examples.json" assert {type: 'json'};
import stationDB  from "../controller/stationController.js";

const router = express.Router();

router.get("/stations_data", async (req, res) => {
    const query = req.query.query || "";
    try {
      const stations = await stationDB.getStations(query);
      console.log(query)
      res.json(stations);
    } catch (err) {
      console.log("error getting data", err);
      return res.status(400).json({ error: err });
    }
    
  });

router.get("/load_fake_data", async(req, res) => {
  data.map(stationDB.createStation)
});    
export default router