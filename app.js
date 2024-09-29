const express = require('express');
const pokemonData = require('./data'); // Import your local data.js
const app = express();

app.get('/api/pokemon', (req, res) => {
  res.json(pokemonData); // Serve the data from data.js
});

const PORT = 3000; // Or any available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/pokemon`);
});
