import readlineSync from "readline-sync";
import typesMatchup from "../data/typesMatchup.js";
import selectOnePokemon from "./selectOnePokemon.js";
import chalk from "chalk";
let count = 0;

function battle(players) {
  const [player1, player2] = players;

  player1.pokeTypeAttack = typesMatchup[player1.selectedPokemon.type];
  player2.pokeTypeAttack = typesMatchup[player2.selectedPokemon.type];

  const player1FightAgility =
    player1.trainer.agility * player1.selectedPokemon.agility;
  const player2FightAgility =
    player2.trainer.agility * player2.selectedPokemon.agility;

  let attackingPlayer =
    player2FightAgility > player1FightAgility ? player2 : player1;
  let defendingPlayer =
    player1FightAgility < player2FightAgility ? player1 : player2;

  dividerFight(player1.selectedPokemon, player2.selectedPokemon);

  while (
    defendingPlayer.pokemon.length > 0 &&
    attackingPlayer.pokemon.length > 0
  ) {
    const selectedPower = powerSelection(attackingPlayer);
    updatePokemonHealth(
      attackingPlayer,
      defendingPlayer,
      player1,
      player2,
      selectedPower
    );

    if (defendingPlayer.selectedPokemon.health <= 0) {
      console.log("");
      console.log(
        `${defendingPlayer.name}'s ${chalk.red.underline(
          defendingPlayer.selectedPokemon.name
        )} is ${chalk.bgRed("DEAD")}`
      );
      removePokemonByName(
        defendingPlayer,
        defendingPlayer.selectedPokemon.name
      );
      if (defendingPlayer.pokemon.length > 0) {
        count = 0;
        selectOnePokemon(defendingPlayer, players);
      } else {
        return console.log(`${defendingPlayer.name} has no remaining Pokemon


                ${chalk.white.bgGreenBright.bold(
                  attackingPlayer.name + " has WON the game!!!"
                )} `);
      }
    }

    [attackingPlayer, defendingPlayer] = [defendingPlayer, attackingPlayer];
  }
}

// This function displays a divider between the two battling Pokemon
function dividerFight(poke1, poke2) {
  console.log("");
  console.log(
    `      ${chalk.blue(poke1.name)} (${chalk.dim(
      poke1.type
    )})               VS                 ${chalk.red(poke2.name)} (${chalk.dim(
      poke2.type
    )})     `
  );
  console.log("");
}

// This function calculates the damage inflicted by an attacking Pokemon
function calculateDamage(attackingPlayer, defendingPlayer, selectedPower) {
  const skip = getRandomNumber(1, 6) === 1;
  const makeZero = skip ? 0 : 1;
  const totalDamage =
    attackingPlayer.selectedPokemon.attack *
    attackingPlayer.selectedPokemon.agility *
    attackingPlayer.pokeTypeAttack.attack[
      defendingPlayer.selectedPokemon.type
    ] *
    attackingPlayer.trainer.agility *
    getRandomNumber(1, 2) *
    getRandomNumber(1, 2) *
    selectedPower *
    makeZero;

  return totalDamage;
}

// This function calculates the protection provided by a defending Pokemon
function calculateProtection(defendingPlayer, attackingPlayer) {
  const totalDefense =
    defendingPlayer.selectedPokemon.defense *
    defendingPlayer.trainer.agility *
    attackingPlayer.pokeTypeAttack.defense[
      defendingPlayer.selectedPokemon.type
    ];

  return totalDefense;
}

// This function updates the health of both attacking and defending Pokemon after a round of attack
function updatePokemonHealth(
  attackingPlayer,
  defendingPlayer,
  player1,
  player2,
  selectedPower
) {
  const damage = calculateDamage(
    attackingPlayer,
    defendingPlayer,
    selectedPower
  );
  const protection = calculateProtection(defendingPlayer, attackingPlayer);

  defendingPlayer.selectedPokemon.health -= damage / protection;

  // console.log(
  //   `${attackingPlayer.name}'s ${attackingPlayer.selectedPokemon.name} --->> ${
  //     defendingPlayer.name
  //   }'s ${defendingPlayer.selectedPokemon.name}         ** ${chalk.redBright(
  //     Math.floor(damage / protection)
  //   )} ${chalk.red("Damage")} **`
  // );

  console.log(
    `${chalk.dim.italic(attackingPlayer.name)}${chalk.dim.italic(
      "'s"
    )} ${chalk.dim.italic(attackingPlayer.selectedPokemon.name)} ${chalk.dim(
      "-->>"
    )} ${chalk.dim.italic(defendingPlayer.name)}${chalk.dim.italic(
      "'s"
    )} ${chalk.dim.italic(
      defendingPlayer.selectedPokemon.name
    )}         ** ${chalk.redBright(
      Math.floor(damage / protection)
    )} ${chalk.red(chalk.dim.italic("Damage"))} **`
  );

  console.log(
    `${chalk.blue(player1.name)}'s ${
      player1.selectedPokemon.name
    } health : ${chalk[bgColor(player1.selectedPokemon.health)](
      Math.round(player1.selectedPokemon.health)
    )}`
  );

  console.log(
    `${chalk.red(player2.name)}'s ${
      player2.selectedPokemon.name
    } health : ${chalk[bgColor(player2.selectedPokemon.health)](
      Math.round(player2.selectedPokemon.health)
    )}`
  );
  count++;
  if (count % 4 === 0 && count !== 0) {
    readlineSync.keyInPause();
    console.clear();
    console.log(
      `${chalk.blue(player1.name)}'s ${
        player1.selectedPokemon.name
      } health : ${chalk[bgColor(player1.selectedPokemon.health)](
        Math.round(player1.selectedPokemon.health)
      )}`
    );
    console.log(
      `${chalk.red(player2.name)}'s ${
        player2.selectedPokemon.name
      } health : ${chalk[bgColor(player2.selectedPokemon.health)](
        Math.round(player2.selectedPokemon.health)
      )}`
    );
  }
}

// This function removes a Pokemon from a player's Pokemon array by name
function removePokemonByName(player, pokemonName) {
  player.pokemon = player.pokemon.filter(
    (pokemon) => pokemon.name !== pokemonName
  );
}

function getRandomNumber(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

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

function powerSelection(attackingPlayer) {
  console.log("");
  console.log(
    `${chalk.dim(
      attackingPlayer.name +
        "'s " +
        attackingPlayer.selectedPokemon.name +
        " turn"
    )}`
  );
  console.log(
    `                                                         ${chalk.dim(
      "(m h u)"
    )}`
  );
  const keyPressed = readlineSync.keyIn("", { hideEchoBack: true, mask: "" });

  if (keyPressed === "m") {
    if (attackingPlayer.m) {
      attackingPlayer.m = 0;
      console.log(chalk.dim.italic("Medium power selected."));
      return Math.floor(Math.random() * 2) + 1.5;
    } else {
      console.log(chalk.dim.italic(`you've already used medium power`));
      return 1;
    }
  } else if (keyPressed === "h") {
    if (attackingPlayer.h) {
      attackingPlayer.h = 0;
      console.log(chalk.dim.italic("High power selected."));
      return Math.floor(Math.random() * 2) + 2.5;
    } else {
      console.log(chalk.dim.italic(`you've already used high power`));
      return 1;
    }
  } else if (keyPressed === "u") {
    if (attackingPlayer.u) {
      attackingPlayer.u = 0;
      console.log(chalk.dim.italic("Ultra power selected."));
      return Math.floor(Math.random() * 2) + 2.5;
    } else {
      console.log(chalk.dim.italic(`you've already used ultra power`));
      return 1;
    }
  } else {
    return 1;
  }
}

export default battle;
