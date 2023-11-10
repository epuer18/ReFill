import express, { json } from "express";
import data from "../db/station_examples.json" assert {type: 'json'};
import stationDB  from "../controller/stationController.js";

const router = express.Router();

router.get("/stations_data", async (req, res) => {
    const stations = await stationDB.getStations({});
    res.json(stations);
  });

router.get("/load_fake_data", async(req, res) => {
  data.map(stationDB.createStation)
});    
export default router