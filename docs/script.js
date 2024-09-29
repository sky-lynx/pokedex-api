document.addEventListener('DOMContentLoaded', () => {
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
});