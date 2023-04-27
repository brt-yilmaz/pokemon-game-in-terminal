import createPlayers from "./createPlayers.js";
import trainers from "../data/trainers.js";
import chalk from "chalk";

function startMessageAndCreatePlayer() {
  console.log(
    chalk.magentaBright(`
  POKEMON battles begin!!!  
  
  Are you ready to go?
  
  Get ready, we're starting!
  `)
  );
  return createPlayers(trainers);
}

function logTrainers(trainers) {
  console.log("ID    | Name     | Str     | Agi     | Int    ");
  console.log("------|----------|---------|---------|------");
  trainers.forEach((trainer) => {
    const id = `${trainer.id}`.padEnd(2);
    const name = `${trainer.name}`.padEnd(7);
    const strength = `${trainer.strength}`.padEnd(5);
    const agility = `${trainer.agility}`.padEnd(5);
    const intelligence = `${trainer.intelligence}`.padEnd(5);

    console.log(
      `${id}    | ${name}  | ${strength}   | ${agility}   | ${intelligence}`
    );
  });
}

function printBattleTable(players) {
  console.clear();
  const [player1, player2] = players;
  console.log("\n");
  console.log(
    `${chalk.blueBright(player1.name.toUpperCase())} with trainer ${
      player1.trainer.name
    }         VS           ${chalk.redBright(
      player2.name.toUpperCase()
    )} with trainer ${player2.trainer.name}`
  );
  console.log(
    chalk.yellow(
      "------------------------                    ------------------------"
    )
  );
  for (let i = 0; i < player1.pokemon.length; i++) {
    const p1 = player1.pokemon[i];
    const p2 = player2.pokemon[i];
    console.log(
      `${chalk.blue(p1.name.padEnd(12))} ${p1.type
        .toUpperCase()
        .padEnd(8)}                       ${chalk.red(
        p2.name.padEnd(12)
      )} ${p2.type.toUpperCase().padEnd(8)} `
    );
  }
  console.log("\n");
  return players;
}

const compose =
  (...fns) =>
  (initialVal) =>
    fns.reduce((val, fn) => fn(val), initialVal);

export default {
  compose,
  startMessageAndCreatePlayer,
  logTrainers,
  printBattleTable,
};
