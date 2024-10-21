document.addEventListener('DOMContentLoaded', () => {
    const statNames = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
    
    // Type colors mapping
    const typeColors = {
        Grass: '#78C850',
        Poison: '#A040A0',
        Fire: '#F08030',
        Water: '#6890F0',
        Bug: '#A8B820',
        Normal: '#A8A878',
        Electric: '#F8D030',
        Ground: '#E0C068',
        Fairy: '#EE99AC',
        Fighting: '#C03028',
        Psychic: '#F85888',
        Rock: '#B8A038',
        Ice: '#98D8D8',
        Dragon: '#7038F8',
        Ghost: '#705898',
        Dark: '#705848',
        Steel: '#B8B8D0',
        Flying: '#A890F0'
    };

    fetch('pokemon-data.json')
        .then(response => response.json())
        .then(pokemonData => {
            const pokemonList = document.getElementById('pokemon-list');
            const popup = document.getElementById('popup');
            const closeButton = document.querySelector('.close-button');

            const dimmedBackground = document.createElement('div');
            dimmedBackground.className = 'dimmed';
            document.body.appendChild(dimmedBackground);

            pokemonData.forEach(pokemon => {
                const card = document.createElement('div');
                card.className = 'pokemon-card';
                card.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>Types: ${pokemon.type.join(', ')}</p>
                `;

                card.addEventListener('click', () => {
                    // Combine name and types for the popup title
                    const typesString = pokemon.type.join(', ');
                    document.getElementById('popup-title').innerText = `${pokemon.name}`;

                    // Create button-like type labels
                    const typesContainer = document.createElement('div');
                    typesContainer.className = 'types-container';

                    pokemon.type.forEach(type => {
                        const typeLabel = document.createElement('span');
                        typeLabel.className = 'type-label';
                        typeLabel.innerText = type;
                        typeLabel.style.backgroundColor = typeColors[type]; // Assign background color
                        typesContainer.appendChild(typeLabel);
                    });

                    // Clear existing types and append the types container
                    document.getElementById('popup-types').innerHTML = ''; // Clear existing text
                    document.getElementById('popup-types').appendChild(typesContainer);

                    const baseStatsElement = document.getElementById('popup-base-stats');
                    baseStatsElement.innerHTML = '';

                    pokemon.baseStats.forEach((stat, index) => {
                        const statBarContainer = document.createElement('div');
                        statBarContainer.className = 'stat-bar-container';

                        const statLabel = document.createElement('span');
                        statLabel.className = 'stat-label';
                        statLabel.innerText = statNames[index];

                        const statBar = document.createElement('div');
                        statBar.className = 'stat-bar';

                        const statBarFill = document.createElement('div');
                        statBarFill.className = 'stat-bar-fill';
                        statBarFill.style.width = '0'; // Start at 0 width

                        // Set color based on stat value
                        if (stat < 30) {
                            statBarFill.style.backgroundColor = '#ff0000'; // red
                        } else if (stat < 60) {
                            statBarFill.style.backgroundColor = '#d1aa36'; // orange
                        } else if (stat < 90) {
                            statBarFill.style.backgroundColor = '#cccf27'; // yellow
                        } else if (stat < 120) {
                            statBarFill.style.backgroundColor = '#54cf27'; // green
                        } else if (stat < 150) {
                            statBarFill.style.backgroundColor = '#338041'; // dark green
                        } else {
                            statBarFill.style.backgroundColor = '#357ecc'; // blue
                        }

                        const statValue = document.createElement('span');
                        statValue.className = 'stat-value';
                        statValue.innerText = stat;

                        statBar.appendChild(statBarFill);
                        statBarContainer.appendChild(statLabel);
                        statBarContainer.appendChild(statBar);
                        statBarContainer.appendChild(statValue);
                        baseStatsElement.appendChild(statBarContainer);

                        // Animate the bar filling up
                        setTimeout(() => {
                            statBarFill.style.width = `${(stat / 255) * 100}%`;
                        }, 100);
                    });

                    // Abilities container
                    const abilitiesContainer = document.createElement('div');
                    abilitiesContainer.className = 'abilities-container';

                    // Add normal abilities
                    pokemon.abilities.forEach(ability => {
                        const abilityButton = document.createElement('button');
                        abilityButton.className = 'ability-button';
                        abilityButton.innerText = ability; // Set ability name
                        abilitiesContainer.appendChild(abilityButton);
                    });

                    // Add hidden abilities
                    pokemon.hability.forEach(hiddenAbility => {
                        const hiddenAbilityButton = document.createElement('button');
                        hiddenAbilityButton.className = 'ability-button hidden-ability';
                        hiddenAbilityButton.innerText = hiddenAbility; // Set hidden ability name
                        abilitiesContainer.appendChild(hiddenAbilityButton);
                    });

                    // Clear existing abilities and append the abilities container
                    document.getElementById('popup-abilities').innerHTML = ''; // Clear existing text
                    document.getElementById('popup-abilities').appendChild(abilitiesContainer);

                    popup.style.display = 'block';
                    dimmedBackground.style.display = 'block';
                });

                pokemonList.appendChild(card);
            });

            closeButton.addEventListener('click', () => {
                popup.style.display = 'none';
                dimmedBackground.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === dimmedBackground) {
                    popup.style.display = 'none';
                    dimmedBackground.style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error loading Pokémon data:', error));
});
