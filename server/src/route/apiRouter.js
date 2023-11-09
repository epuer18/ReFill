import express from "express";
import stationDB  from "../controller/stationController.js";

const router = express.Router();

router.get("/stations_data", async (req, res) => {
    const stations = await stationDB.getStations({});
    res.json(stations);
  });


export default router