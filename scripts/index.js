// connect to play field in HTML
const pokemonStartersEl = document.querySelector(".player-starters");
const pokemonStartersPC = document.querySelector(".computer-starters");
const pokemonStarterGreenEl = document.querySelector(".pokemon-card-green");
const pokemonStarterRedEl = document.querySelector(".pokemon-card-red");
const pokemonStarterBlueEl = document.querySelector(".pokemon-card-blue");
const pokemonStarterGreenPC = document.querySelector(".pokemon-card-green-PC");
const pokemonStarterRedPC = document.querySelector(".pokemon-card-red-PC");
const pokemonStarterBluePC = document.querySelector(".pokemon-card-blue-PC");
const battleField = document.querySelector(".battle");

// play buttons
const bulbButton = document.querySelector(".bulb");
const charButton = document.querySelector(".char");
const squirButton = document.querySelector(".squir");
const playButtons = document.querySelector(".input");

// API and regional pokemon
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
const kantoPokemon = ["1", "4", "7"];
const johtoPokemon = ["152", "155", "158"];

// battle / win / lose box
const battleBox = document.createElement("p");
battleBox.classList.add("battle-box");
const winnerBox = document.createElement("div");
winnerBox.classList.add("winner-box");

// initialize computer random choice
var compChoice = (Math.random() * johtoPokemon.length) | 0;

// create player grass type pokemon
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

// create player fire type pokemon
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

// create player water type pokemon
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

// print player side pokemon
function printPokemon() {
  fetchPokemonGreen(pokemonAPI + kantoPokemon[0]);
  fetchPokemonRed(pokemonAPI + kantoPokemon[1]);
  fetchPokemonBlue(pokemonAPI + kantoPokemon[2]);
}

// I choose you, Bulbasaur!
function choiceBulb() {
  pokemonStarterGreenEl.classList.add("pokemon-card-active");
  pokemonStarterRedEl.classList.remove("pokemon-card-active");
  pokemonStarterBlueEl.classList.remove("pokemon-card-active");
  computerChoice();
  if (compChoice === 1) {
    battleField.innerHTML = "";
    const battleMessage = "lose!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (johtoPokemon[1] !== "157") {
      johtoPokemon[1] = (Number(johtoPokemon[1]) + 1).toString();
    }
  } else if (compChoice === 2) {
    battleField.innerHTML = "";
    const battleMessage = "win!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (kantoPokemon[0] !== "3") {
      kantoPokemon[0] = (Number(kantoPokemon[0]) + 1).toString();
    }
  } else {
    battleField.innerHTML = "";
    const battleMessage = "tie!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
  }
  refreshPokemon();
}

// I choose you, Charmander!
function choiceChar() {
  pokemonStarterGreenEl.classList.remove("pokemon-card-active");
  pokemonStarterRedEl.classList.add("pokemon-card-active");
  pokemonStarterBlueEl.classList.remove("pokemon-card-active");
  computerChoice();
  if (compChoice === 2) {
    battleField.innerHTML = "";
    const battleMessage = "lose!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (johtoPokemon[2] !== "160") {
      johtoPokemon[2] = (Number(johtoPokemon[2]) + 1).toString();
    }
  } else if (compChoice === 0) {
    battleField.innerHTML = "";
    const battleMessage = "win!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (kantoPokemon[1] !== "6") {
      kantoPokemon[1] = (Number(kantoPokemon[1]) + 1).toString();
    }
  } else {
    battleField.innerHTML = "";
    const battleMessage = "tie!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
  }
  refreshPokemon();
}

// I choose you, Squirtle!!
function choiceSquir() {
  pokemonStarterGreenEl.classList.remove("pokemon-card-active");
  pokemonStarterRedEl.classList.remove("pokemon-card-active");
  pokemonStarterBlueEl.classList.add("pokemon-card-active");
  computerChoice();
  console.log(compChoice);
  if (compChoice === 0) {
    battleField.innerHTML = "";
    const battleMessage = "lose!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (johtoPokemon[0] !== "154") {
      johtoPokemon[0] = (Number(johtoPokemon[0]) + 1).toString();
    }
  } else if (compChoice === 1) {
    battleField.innerHTML = "";
    const battleMessage = "win!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
    if (kantoPokemon[2] !== "9") {
      kantoPokemon[2] = (Number(kantoPokemon[2]) + 1).toString();
    }
  } else {
    battleField.innerHTML = "";
    const battleMessage = "tie!";
    battleBox.innerText = battleMessage;
    battleField.appendChild(battleBox);
  }
  refreshPokemon();
}

// player inputs to battle
bulbButton.addEventListener("click", choiceBulb);
charButton.addEventListener("click", choiceChar);
squirButton.addEventListener("click", choiceSquir);

/// PC
// PC print grass type pokemon
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

// pc print water type pokemon
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

// pc print fire type pokemon
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
  fetchPokemonGreenPC(pokemonAPI + johtoPokemon[0]);
  fetchPokemonRedPC(pokemonAPI + johtoPokemon[1]);
  fetchPokemonBluePC(pokemonAPI + johtoPokemon[2]);
  checkPlayerWin();
  checkCompWin();
}

function computerChoice() {
  compChoice = (Math.random() * johtoPokemon.length) | 0;
  if (compChoice === 0) {
    pokemonStarterGreenPC.classList.add("pokemon-card-active-pc");
    pokemonStarterRedPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterBluePC.classList.remove("pokemon-card-active-pc");
  } else if (compChoice === 1) {
    pokemonStarterGreenPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterRedPC.classList.add("pokemon-card-active-pc");
    pokemonStarterBluePC.classList.remove("pokemon-card-active-pc");
  } else {
    pokemonStarterGreenPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterRedPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterBluePC.classList.add("pokemon-card-active-pc");
  }
}

// Winner check
function checkPlayerWin() {
  if (
    kantoPokemon[0] == "3" &&
    kantoPokemon[1] == "6" &&
    kantoPokemon[2] == "9"
  ) {
    pokemonStarterGreenEl.classList.remove("pokemon-card-active");
    pokemonStarterRedEl.classList.remove("pokemon-card-active");
    pokemonStarterBlueEl.classList.remove("pokemon-card-active");
    pokemonStarterGreenPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterRedPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterBluePC.classList.remove("pokemon-card-active-pc");
    const winner = "WINNER!";
    winnerBox.innerText = winner;
    pokemonStartersEl.appendChild(winnerBox);
    playButtons.innerHTML = "";
    battleField.innerHTML = "";
  }
}

// Loser check
function checkCompWin() {
  if (
    johtoPokemon[0] == "154" &&
    johtoPokemon[1] == "157" &&
    johtoPokemon[2] == "160"
  ) {
    pokemonStarterGreenEl.classList.remove("pokemon-card-active");
    pokemonStarterRedEl.classList.remove("pokemon-card-active");
    pokemonStarterBlueEl.classList.remove("pokemon-card-active");
    pokemonStarterGreenPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterRedPC.classList.remove("pokemon-card-active-pc");
    pokemonStarterBluePC.classList.remove("pokemon-card-active-pc");
    const winner = "LOSER!";
    winnerBox.innerText = winner;
    pokemonStartersEl.appendChild(winnerBox);
    playButtons.innerHTML = "";
    battleField.innerHTML = "";
  }
}

// clear current pokemon, check evolutions, reprint
function refreshPokemon() {
  pokemonStarterGreenEl.innerHTML = "";
  pokemonStarterBlueEl.innerHTML = "";
  pokemonStarterRedEl.innerHTML = "";
  pokemonStarterGreenPC.innerHTML = "";
  pokemonStarterBluePC.innerHTML = "";
  pokemonStarterRedPC.innerHTML = "";
  printPokemonPC();
  printPokemon();
}

// game start
printPokemonPC();
printPokemon();
