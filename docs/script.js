document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/pokemon')  // Local API URL
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemon-list');
            data.forEach(pokemon => {
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
