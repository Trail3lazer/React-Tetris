
const express = require('express');
const app = express();
const path = require("path")
const port = process.env.PORT || 5000;

ranks = [{
  name: "Player1",
  score: 1000,
  lines: 4
}]

// Serve static files from the React app
app.use(express.static('client/build'));
app.use(express.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

app.get('api/ranks', (req, res) => {
  app.json(ranks)
})

app.post('api/ranks', (req, res) => {
  const newRank = req.body;

  for (let i in ranks) {
    if (newRank['score'] > ranks[i]['score']) {
      ranks[i] = newRank;
    } else if (i === ranks.length) {
      ranks.push(newRank);
    }
  }
})


app.get('*', (req, res) => {
  res.sendFile('client/build/index.html');
});
