const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./index");
const userRoutes = require("./Routes/userRoutes");
require("dotenv").config();

const connectionString = process.env.DB_URL;

mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();
const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use("/users", userRoutes);
app.listen(4000, () => console.log("Listening on port 4000....."));
