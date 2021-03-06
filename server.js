
const express = require('express');
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;
const apiRoutes = require("./routes/apiRoutes")

// init DB
require('dotenv').config()

var db = require("./models");
var MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>console.log("DB connected"));


ranks = [{
  name: "Player1",
  score: 1000,
  lines: 4
}]

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// -- API Routes 
apiRoutes(db, app)


// -- Catch All Route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// console.log that server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

