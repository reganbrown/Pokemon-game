const pokemonStartersEl = document.querySelector(".pokemon-starters");

const allPokemon = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charmander",
  "https://pokeapi.co/api/v2/pokemon/squirtle",
];

const fetchPokemon = async (pokeURL) => {
  const response = await axios.get(pokeURL);
  console.log(response);
  const newPokemonCard = document.createElement("div");
  newPokemonCard.classList.add("pokemon-card");
  pokemonStartersEl.appendChild(newPokemonCard);

  const pokemonPic = response.data.sprites.front_default;
  const newPokemonPic = document.createElement("img");
  newPokemonPic.classList.add("pokemon-card__img");
  newPokemonPic.setAttribute("src", pokemonPic);

  newPokemonCard.appendChild(newPokemonPic);

  const newPokemonName = document.createElement("p");
  newPokemonName.classList.add("pokemon-card__name");
  newPokemonName.innerText = response.data.name;
  newPokemonCard.appendChild(newPokemonName);
};

allPokemon.forEach((pokemon) => {
  fetchPokemon(pokemon);
});
