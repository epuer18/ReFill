import express, { json } from "express";
import data from "../db/station_examples.json" assert { type: "json" };
import stationDB from "../controller/stationController.js";
const router = express.Router();

router.get("/api/add", async (req, res) => {
  res.redirect("/");
});

router.get("/api/stations_data", async (req, res) => {
  const query = req.query.query || "";
  try {
    const stations = await stationDB.getStations(query);
    console.log(query);
    res.json(stations);
  } catch (err) {
    console.log("error getting data", err);
    return res.status(400).json({ error: err });
  }
});

router.get("/api/load_fake_data", async (req, res) => {
  data.map(stationDB.createStation);
});

// POST route for adding a new station
router.post("/api/create", async (req, res) => {
  try {
    const stationData = req.body;

    // Validate stationData here if needed
    if (stationData.zip_code.length !== 5) {
      return res.json({
        status: "error",
        error: "Invalid zip code",
      });
    }

    const result = await stationDB.createStation(stationData);

    res.json({
      status: "ok",
      message: "Station created successfully",
      stationId: result.insertedId,
    });
  } catch (err) {
    return res.json({
      status: "error",
      message: "Error creating station",
      error: err,
    });
  }
});

router.delete("/api/stations/:id", async (req, res) => {
  try {
    const stationId = req.params.id;
    const result = await stationDB.deleteStation(stationId);

    if (result.deletedCount === 0) {
      return res.send({ status: "error", error: "Station not found" });
    }

    res.send({ status: "ok", message: "Station deleted successfully" });
  } catch (error) {
    res.send({ status: "error", error: "Error deleting station" });
  }
});

export default router;
