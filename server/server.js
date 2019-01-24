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
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);
app.use(cors());

const db = mongoose.createConnection(
  `mongodb://fromageBoyz:${password}@ds111455.mlab.com:11455/budget-db`,
  { useNewUrlParser: true }
);
const dbRoute = `mongodb://fromageBoyz:${password}@ds111455.mlab.com:11455/budget-db`;

app.get("/test", (req, res) => {
  MongoClient.connect(
    dbRoute,
    { useNewUrlParser: true },
    (err, database) => {
      let collection = db.collection("wallets");
      collection.find({}).toArray((err, data) => {
        return res.json(data);
      });
    }
  );
});

app.post("/new", (req, res) => {
  MongoClient.connect(
    dbRoute,
    { useNewUrlParser: true },
    (err, database) => {
      let collection = db.collection("wallets");
      collection.insertOne({
        date: req.body.date,
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        amount: req.body.amount
      });
    }
  );
});

db.once("open", () => console.log("Connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
