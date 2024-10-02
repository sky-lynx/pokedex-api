document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemon-list');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');

    // Fetch Pokémon data from the JSON file
    fetch('pokemon-data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(pokemonData => {
            pokemonData.forEach(pokemon => {
                const card = document.createElement('div');
                card.className = 'pokemon-card';
                card.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>Types: ${pokemon.type.join(', ')}</p>
                    <p>Abilities: ${pokemon.abilities.join(', ')}</p>
                `;

                // Add click event to show popup
                card.addEventListener('click', () => {
                    document.getElementById('popup-title').innerText = pokemon.name;
                    document.getElementById('popup-types').innerText = `Types: ${pokemon.type.join(', ')}`;
                    document.getElementById('popup-abilities').innerText = `Abilities: ${pokemon.abilities.join(', ')}`;
                    document.getElementById('popup-base-stats').innerText = `Base Stats: ${pokemon.baseStats.join(', ')}`;
                    popup.style.display = 'block'; // Show the popup
                });

                pokemonList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Close button functionality
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none'; // Hide the popup
        }
    });
});
