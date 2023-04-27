import readlineSync from "readline-sync";
import battle from "./battle.js";
import chalk from "chalk";

const selectOnePokemon = (player, players) => {
  readlineSync.keyInPause();
  console.clear();

  const attackingPl = players.filter((item) => item !== player);
  console.log("");
  console.log(
    `${attackingPl[0].name}'s ${
      attackingPl[0].selectedPokemon.name
    } --- ${chalk.bgYellow(
      attackingPl[0].selectedPokemon.type.toUpperCase()
    )} wait for next round with health : ${chalk[
      bgColor(attackingPl[0].selectedPokemon.health)
    ](Math.floor(attackingPl[0].selectedPokemon.health))} `
  );
  console.log("");
  console.log(`${player.name} select your Pokemon:`);
  player.pokemon.forEach((pokemon, index) =>
    console.log(
      `${index + 1}. ${pokemon.name} --- ${pokemon.type.toUpperCase()}`
    )
  );

  const selectedPokemonIndex1 = readlineSync.questionInt(
    "\nEnter Pokemon index:"
  );
  const selectedPokemon1 = player.pokemon[selectedPokemonIndex1 - 1];
  player.selectedPokemon = selectedPokemon1;
  player.selectedPokemon.health = 100;

  console.clear();
  console.log(
    `${player.name} has selected ${
      selectedPokemon1.name
    } --- ${selectedPokemon1.type.toUpperCase()}
    `
  );
  console.clear();
  return battle(players);
};

function bgColor(pokemonHealth) {
  let bgColor = "";

  if (pokemonHealth >= 90) {
    bgColor = "greenBright";
  } else if (pokemonHealth >= 80) {
    bgColor = "green";
  } else if (pokemonHealth >= 70) {
    bgColor = "cyanBright";
  } else if (pokemonHealth >= 60) {
    bgColor = "cyan";
  } else if (pokemonHealth >= 50) {
    bgColor = "blueBright";
  } else if (pokemonHealth >= 40) {
    bgColor = "blue";
  } else if (pokemonHealth >= 30) {
    bgColor = "yellowBright";
  } else if (pokemonHealth >= 20) {
    bgColor = "yellow";
  } else {
    bgColor = "redBright";
  }

  return bgColor;
}

export default selectOnePokemon;
