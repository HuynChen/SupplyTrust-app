const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/api"); 
require("dotenv").config();
const app = express();

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;
const mongodb = process.env.MONGODB_URL || "";
const hostname = process.env.HOST_NAME || "localhost";

async function connectDB() {
  try {
    await mongoose.connect(mongodb);
    console.log("MongoDB connect thành công");
  } catch (err) {
    console.error("MongoDB connect thất bại:", err.message);
  }
}
connectDB();

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on http://${hostname}:${port}/api`);
});
