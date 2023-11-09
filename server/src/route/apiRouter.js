import express from "express";

const router = express.Router();

router.get("/services", async (req, res) => {
    const services = await myDB.getServices({ MaxElements: 21 });
    res.json(services);
  });

  export default router