import express from "express";
import { userDB } from "../controller/userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();
const JWT_SECRET = "sdjkfh8923yhjdksbfma@";

// userRouter.get("/login", (req, res) => {
//   res.redirect("/login");
// });
// userRouter.get("/register", (req, res) => {
//   res.redirect("/register");
// });

userRouter.post("/auth/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be at least 6 characters",
    });
  }

  const checking = await userDB.findUserByUsername({
    username: username,
  });

  if (checking) {
    console.log(checking.username);
    if (checking.username === username) {
      return res.json({ status: "error", error: "Username already in use" });
    }
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await userDB.createUser({
      username,
      password,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});

userRouter.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userDB.findUserByUsername({ username: username });

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    console.log("correct password");
    // the username, password combination is successful

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid username/password" });
});

export default userRouter;
