const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const hostname = "127.0.0.1";
const port = process.env.port || 3006;

const express = require("express");

const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/guestbook", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.listen(port, hostname, (err) => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
