import express from 'express';
import path, {dirname} from 'path';
import cookieParser from 'cookie-parser';
import cors from "cors";
import userRouter from "./route/userRoute.js";
import apiRouter from "./route/apiRouter.js";
import bodyParser from "body-parser";
import logger from 'morgan';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../../client/build')));

app.use("/auth", userRouter);
app.use("/api", apiRouter);

app.listen(3000, () => console.log("app started at 3000..."));
export default app;