document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://pokedex-api.azurewebsites.net/api/pokemon'; // Your actual API URL
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const pokemonList = document.getElementById('pokemon-list');
            data.forEach(pokemon => {
                const card = document.createElement('div');
                card.className = 'pokemon-card';
                card.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>Types: ${pokemon.types.join(', ')}</p>
                `;
                pokemonList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
