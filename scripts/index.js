const pokemonStartersEl = document.querySelector(".pokemon-starters");
const pokemonStarterGreenEl = document.querySelector(".pokemon-card-green");
const pokemonStarterRedEl = document.querySelector(".pokemon-card-red");
const pokemonStarterBlueEl = document.querySelector(".pokemon-card-blue");
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
const allPokemon = ["1", "4", "7"];
const bulbButton = document.querySelector(".bulb");
const charButton = document.querySelector(".char");
const squirButton = document.querySelector(".squir");
const winnerBox = document.createElement("div");
winnerBox.classList.add("winner-box");
const winner = "WINNER!";
winnerBox.innerText = winner;
const fetchPokemonGreen = async (pokeURL) => {
  const response = await axios.get(pokeURL);
  console.log(response);
  const newPokemonCard = document.createElement("div");
  newPokemonCard.classList.add("pokemon-card");

  const pokemonPic = response.data.sprites.front_default;
  const newPokemonPic = document.createElement("img");
  newPokemonPic.classList.add("pokemon-card__img");
  newPokemonPic.setAttribute("src", pokemonPic);

  newPokemonCard.appendChild(newPokemonPic);

  const newPokemonName = document.createElement("p");
  newPokemonName.classList.add("pokemon-card__name");
  newPokemonName.innerText = response.data.name;
  newPokemonCard.appendChild(newPokemonName);

  const newPokemonType = document.createElement("p");
  newPokemonType.classList.add("pokemon-card__type");
  newPokemonType.innerText = response.data.types[0].type.name;
  newPokemonCard.appendChild(newPokemonType);
  pokemonStarterGreenEl.appendChild(newPokemonCard);
};

const fetchPokemonBlue = async (pokeURL) => {
  const response = await axios.get(pokeURL);
  console.log(response);
  const newPokemonCard = document.createElement("div");
  newPokemonCard.classList.add("pokemon-card");

  const pokemonPic = response.data.sprites.front_default;
  const newPokemonPic = document.createElement("img");
  newPokemonPic.classList.add("pokemon-card__img");
  newPokemonPic.setAttribute("src", pokemonPic);

  newPokemonCard.appendChild(newPokemonPic);

  const newPokemonName = document.createElement("p");
  newPokemonName.classList.add("pokemon-card__name");
  newPokemonName.innerText = response.data.name;
  newPokemonCard.appendChild(newPokemonName);

  const newPokemonType = document.createElement("p");
  newPokemonType.classList.add("pokemon-card__type");
  newPokemonType.innerText = response.data.types[0].type.name;
  newPokemonCard.appendChild(newPokemonType);
  pokemonStarterBlueEl.appendChild(newPokemonCard);
};

const fetchPokemonRed = async (pokeURL) => {
  const response = await axios.get(pokeURL);
  console.log(response);
  const newPokemonCard = document.createElement("div");
  newPokemonCard.classList.add("pokemon-card");

  const pokemonPic = response.data.sprites.front_default;
  const newPokemonPic = document.createElement("img");
  newPokemonPic.classList.add("pokemon-card__img");
  newPokemonPic.setAttribute("src", pokemonPic);

  newPokemonCard.appendChild(newPokemonPic);

  const newPokemonName = document.createElement("p");
  newPokemonName.classList.add("pokemon-card__name");
  newPokemonName.innerText = response.data.name;
  newPokemonCard.appendChild(newPokemonName);

  const newPokemonType = document.createElement("p");
  newPokemonType.classList.add("pokemon-card__type");
  newPokemonType.innerText = response.data.types[0].type.name;
  newPokemonCard.appendChild(newPokemonType);
  pokemonStarterRedEl.appendChild(newPokemonCard);
};

function printPokemon() {
  fetchPokemonGreen(pokemonAPI + allPokemon[0]);
  fetchPokemonRed(pokemonAPI + allPokemon[1]);
  fetchPokemonBlue(pokemonAPI + allPokemon[2]);
  if (allPokemon[0] == "3" && allPokemon[1] == "6" && allPokemon[2] == "9") {
    pokemonStartersEl.appendChild(winnerBox);
  }
}

printPokemon();

function evolveBulb() {
  if (allPokemon[0] !== "3") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    allPokemon[0] = (Number(allPokemon[0]) + 1).toString();
    printPokemon();
  }
}

function evolveChar() {
  if (allPokemon[1] !== "6") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    allPokemon[1] = (Number(allPokemon[1]) + 1).toString();
    printPokemon();
  }
}

function evolveSquir() {
  if (allPokemon[2] !== "9") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    allPokemon[2] = (Number(allPokemon[2]) + 1).toString();
    printPokemon();
  }
}

bulbButton.addEventListener("click", evolveBulb);
charButton.addEventListener("click", evolveChar);
squirButton.addEventListener("click", evolveSquir);
