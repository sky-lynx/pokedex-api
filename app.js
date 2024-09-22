const express = require('express');
const app = express();
const pokemonData = require('./data');

const PORT = process.env.PORT || 3000;

// GET all Pokémon
app.get('/api/pokemon', (req, res) => {
  res.json(pokemonData);
});

// GET Pokémon by ID or Name
app.get('/api/pokemon/:identifier', (req, res) => {
  const identifier = req.params.identifier.toLowerCase();

  // Check if the identifier is numeric (ID)
  const pokemon = isNaN(identifier)
    ? pokemonData.find(p => p.name.toLowerCase() === identifier) // Search by name
    : pokemonData.find(p => p.id == identifier); // Search by ID

  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ message: 'Pokémon not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
