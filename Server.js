
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

ranks = [{
  name: "Jared",
  score: 1000,
  lines: 4
}]

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

app.get('api/ranks', (req, res) => {

})

app.post('api/ranks', (req, res) => {

})