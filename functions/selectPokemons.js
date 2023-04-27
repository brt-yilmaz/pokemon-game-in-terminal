import readlineSync from "readline-sync";
import chalk from "chalk";

const selectPokemon = (players) => {
  const [player1, player2] = players;
  readlineSync.keyInPause();
  console.clear();
  console.log("\n");
  console.log(
    `*******************************    - ${chalk.bgRedBright(
      chalk.white("FIGHT")
    )} -      *****************************`
  );
  console.log("");
  console.log(`${chalk.blue(player1.name)} select your Pokemon:`);
  console.log("");
  player1.pokemon.forEach((pokemon, index) =>
    console.log(
      `${index + 1}. ${pokemon.name} --- ${pokemon.type.toUpperCase()}`
    )
  );

  const selectedPokemonIndex1 = readlineSync.questionInt(
    "\nEnter Pokemon index:"
  );
  const selectedPokemon1 = player1.pokemon[selectedPokemonIndex1 - 1];

  console.clear();
  console.log("");
  console.log(
    `${player1.name} has selected ${
      selectedPokemon1.name
    } --- ${selectedPokemon1.type.toUpperCase()}
    `
  );

  console.log(`${chalk.red(player2.name)} select your Pokemon:`);
  console.log("");
  player2.pokemon.forEach((pokemon, index) =>
    console.log(
      `${index + 1}. ${pokemon.name} --- ${pokemon.type.toUpperCase()}`
    )
  );

  const selectedPokemonIndex2 = readlineSync.questionInt(
    "\nEnter Pokemon index: "
  );
  const selectedPokemon2 = player2.pokemon[selectedPokemonIndex2 - 1];

  player1.selectedPokemon = selectedPokemon1;
  player2.selectedPokemon = selectedPokemon2;
  player1.selectedPokemon.health = player2.selectedPokemon.health = 100;

  console.clear();
  return players;
};

export default selectPokemon;
