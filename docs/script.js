document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemon-list');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close');

    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>Types: ${pokemon.type.join(', ')}</p>
            <p>Abilities: ${pokemon.abilities.join(', ')}</p>
        `;
        
        // Add click event to open popup
        card.addEventListener('click', () => {
            document.getElementById('popup-name').innerText = pokemon.name;
            document.getElementById('popup-types').innerText = pokemon.type.join(', ');
            document.getElementById('popup-abilities').innerText = pokemon.abilities.join(', ');
            document.getElementById('popup-stats').innerText = pokemon.baseStats.join(', ');
            popup.style.display = 'block';
        });

        pokemonList.appendChild(card);
    });

    // Close the popup
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
