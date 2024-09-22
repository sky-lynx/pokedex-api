const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Example data (You can replace this with dynamic data)
const pokemonData = [
  { id: 1, name: 'Bulbasaur', type: 'Grass', ability: 'Overgrow' },
  { id: 2, name: 'Charmander', type: 'Fire', ability: 'Blaze' },
  { id: 3, name: 'Squirtle', type: 'Water', ability: 'Torrent' },
];

// Basic GET endpoint
app.get('/api/pokemon', (req, res) => {
  res.json(pokemonData);
});

// Specific Pokémon endpoint
app.get('/api/pokemon/:id', (req, res) => {
  const pokemon = pokemonData.find(p => p.id == req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ message: 'Pokémon not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
