document.addEventListener('DOMContentLoaded', () => {
    fetch('pokemon-data.json') // Fetch the JSON file
        .then(response => response.json())
        .then(pokemonData => {
            const pokemonList = document.getElementById('pokemon-list');
            pokemonData.forEach(pokemon => {
                const card = document.createElement('div');
                card.className = 'pokemon-card';
                card.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>Types: ${pokemon.type.join(', ')}</p>
                    <p>Abilities: ${pokemon.abilities.join(', ')}</p>
                `;
                pokemonList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
