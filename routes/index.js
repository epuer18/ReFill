import express from "express";
let router = express.Router();

import myDB from "../db/myMongoDb.js";

/* GET home page. */
router.get("/api/photos", async function (req, res) {

  const photos = await myDB.getPhotos();
  res.json({photos});
});

export default router;

//TODO go and search for POSTMAN - common app used widely to test API (generate get and Post requests and pass params and things like that)