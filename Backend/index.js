import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/database/db.js";
import { router } from "./src/Routes/user.js";
import cors from "cors";
import { foodrouter } from "./src/Routes/food.js";
dotenv.config({ path: "./env" });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.use("/api/v1", foodrouter);
app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

dbConnect();
app.listen(process.env.PORT || 8000, () => {
  console.log("server connected");
});
