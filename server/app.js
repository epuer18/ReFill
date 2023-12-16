import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./route/userRoute.js";
import apiRouter from "./route/apiRouter.js";
import bodyParser from "body-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await userDB.findUserByUsername({ username: username });

      if (!user) {
        return done(null, false, { message: "Invalid username/password" });
      }

      const isValid = await crypto.compare(password, user.password);

      if (!isValid) {
        return done(null, false, { message: "Invalid username/password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

app.use(
  session({
    secret: "Jill secret",
    resave: false,
    saveUninitialized: false,
  })
);

passport.serializeUser(function (user, done) {
  process.nextTick(function () {
    done(null, { id: user._id, username: user.username });
  });
});

passport.deserializeUser(function (user, done) {
  process.nextTick(function () {
    return done(null, user);
  });
});
app.use(passport.authenticate("session"));

app.use("/", userRouter);
app.use("/", apiRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(3000, () => console.log("app started at 3000..."));
export default app;
