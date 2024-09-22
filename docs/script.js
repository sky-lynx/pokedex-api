document.addEventListener('DOMContentLoaded', () => {
    fetch('YOUR_API_URL/api/pokemon') // Update with your actual API URL
        .then(response => response.json())
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
