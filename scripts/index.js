const pokemonStartersEl = document.querySelector(".player-starters");
const pokemonStartersPC = document.querySelector(".computer-starters");
const pokemonStarterGreenEl = document.querySelector(".pokemon-card-green");
const pokemonStarterRedEl = document.querySelector(".pokemon-card-red");
const pokemonStarterBlueEl = document.querySelector(".pokemon-card-blue");
const pokemonStarterGreenPC = document.querySelector(".pokemon-card-green-PC");
const pokemonStarterRedPC = document.querySelector(".pokemon-card-red-PC");
const pokemonStarterBluePC = document.querySelector(".pokemon-card-blue-PC");

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
const kantoPokemon = ["1", "4", "7"];
const johotoPokemon = ["152", "155", "158"];

const bulbButton = document.querySelector(".bulb");
const charButton = document.querySelector(".char");
const squirButton = document.querySelector(".squir");
const winnerBox = document.createElement("div");
winnerBox.classList.add("winner-box");
const winner = "WINNER!";
winnerBox.innerText = winner;

const fetchPokemonGreen = async (pokeURL) => {
  const response = await axios.get(pokeURL);
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
  fetchPokemonGreen(pokemonAPI + kantoPokemon[0]);
  fetchPokemonRed(pokemonAPI + kantoPokemon[1]);
  fetchPokemonBlue(pokemonAPI + kantoPokemon[2]);
  if (
    kantoPokemon[0] == "3" &&
    kantoPokemon[1] == "6" &&
    kantoPokemon[2] == "9"
  ) {
    pokemonStartersEl.appendChild(winnerBox);
  }
}

function evolveBulb() {
  if (kantoPokemon[0] !== "3") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    pokemonStarterGreenPC.innerHTML = "";
    pokemonStarterBluePC.innerHTML = "";
    pokemonStarterRedPC.innerHTML = "";
    kantoPokemon[0] = (Number(kantoPokemon[0]) + 1).toString();
    printPokemonPC();
    printPokemon();
  }
}

function evolveChar() {
  if (kantoPokemon[1] !== "6") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    pokemonStarterGreenPC.innerHTML = "";
    pokemonStarterBluePC.innerHTML = "";
    pokemonStarterRedPC.innerHTML = "";
    kantoPokemon[1] = (Number(kantoPokemon[1]) + 1).toString();
    printPokemonPC();
    printPokemon();
  }
}

function evolveSquir() {
  if (kantoPokemon[2] !== "9") {
    pokemonStarterGreenEl.innerHTML = "";
    pokemonStarterBlueEl.innerHTML = "";
    pokemonStarterRedEl.innerHTML = "";
    pokemonStarterGreenPC.innerHTML = "";
    pokemonStarterBluePC.innerHTML = "";
    pokemonStarterRedPC.innerHTML = "";
    kantoPokemon[2] = (Number(kantoPokemon[2]) + 1).toString();
    printPokemonPC();
    printPokemon();
  }
}

bulbButton.addEventListener("click", evolveBulb);
charButton.addEventListener("click", evolveChar);
squirButton.addEventListener("click", evolveSquir);

/// PC

const fetchPokemonGreenPC = async (pokeURL) => {
  const response = await axios.get(pokeURL);
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
  pokemonStarterGreenPC.appendChild(newPokemonCard);
};

const fetchPokemonBluePC = async (pokeURL) => {
  const response = await axios.get(pokeURL);
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
  pokemonStarterBluePC.appendChild(newPokemonCard);
};

const fetchPokemonRedPC = async (pokeURL) => {
  const response = await axios.get(pokeURL);
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
  pokemonStarterRedPC.appendChild(newPokemonCard);
};

function printPokemonPC() {
  fetchPokemonGreenPC(pokemonAPI + johotoPokemon[0]);
  fetchPokemonRedPC(pokemonAPI + johotoPokemon[1]);
  fetchPokemonBluePC(pokemonAPI + johotoPokemon[2]);
}

printPokemonPC();
printPokemon();
