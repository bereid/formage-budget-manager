const express = require('express');
const app = express();
const PORT = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cors = require('cors');
const mockdb = require('../mockdb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/budget", (req, res) => {
  res.send(mockdb);
});

app.listen(PORT, ()=> {
  console.log(`Server is running on the PORT: ${PORT}`);
});