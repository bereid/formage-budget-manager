const express = require("express");
const app = express();
const PORT = 4444;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const password = require("./password");
const mockdb = require("../src/mockdb");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = mongoose.connection;
const dbRoute = `mongodb://fromageBoyz:${password}@ds111425.mlab.com:11425/fromage-budget-db`;

app.get("/api/budget", (req, res) => {
  res.send(mockdb);
});

app.get("/test", (req, res) => {
  MongoClient.connect(
    dbRoute,
    { useNewUrlParser: true },
    (err, database) => {
      let collection = db.collection("budget");
      collection.find({}).toArray((err, data) => {
        return res.json(data);
      });
    }
  );
});

db.once("open", () => console.log("Connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Server is running on the PORT: ${PORT}`);
});
