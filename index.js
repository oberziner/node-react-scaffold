const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res
  .status(200)
  .json({message: 'Hi!'});
});

app.use('/', express.static(`${__dirname}/frontend/dist`));

// express will serve up index.html if it doesn't recognize the route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend/dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
