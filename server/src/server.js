import express from "express";
import cors from "cors";
import userRouter from "./route/userRoute.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", userRouter);

app.listen(3000, () => console.log("app started at 3000..."));
