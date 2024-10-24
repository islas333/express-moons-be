import express from "express";
import dotenv from "dotenv";
import smileCenterRoutes from "./routes/smileCenterRoutes";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", smileCenterRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
