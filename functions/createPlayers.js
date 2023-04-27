import helper from "./helperFunctions.js";
import trainers from "../data/trainers.js";
import readlineSync from "readline-sync";
import pokemons from "../data/pokemons.js";
import chalk from "chalk";

function createPlayers(trainers) {
  const players = [];

  // Get player 1 information
  const name1 = readlineSync.question(chalk.blue("Enter player1 name: "));
  console.clear();
  console.log(chalk.yellow("\nAvailable trainers:\n"));
  helper.logTrainers(trainers);
  const trainerId1 = readlineSync.questionInt(
    chalk.blue("\nEnter player1 trainer id: ")
  );
  const trainer1 =
    trainers.find((trainer) => trainer.id === trainerId1)?.name || "";
  players.push(new Player({ name: name1.toUpperCase(), trainer: trainer1 }));

  console.clear();

  // Get player 2 information
  const name2 = readlineSync.question(chalk.red("\nEnter player2 name: "));
  console.clear();
  console.log(chalk.yellow("\nAvailable trainers:\n"));
  helper.logTrainers(trainers);
  const trainerId2 = readlineSync.questionInt(
    chalk.red("\nEnter player2 trainer id: ")
  );
  const trainer2 =
    trainers.find((trainer) => trainer.id === trainerId2)?.name || "";
  players.push(new Player({ name: name2.toUpperCase(), trainer: trainer2 }));

  return players;
}

class Player {
  constructor({ name, trainer } = {}) {
    this.name = name || "berat";
    this.trainer = getRandomTrainer();
    this.pokemon = addPokemonToPlayer();
    this.u = 1;
    this.m = 1;
    this.h = 1;
  }

  getInfo() {
    console.log(
      `${this.name} plays with ${this.trainer} and has ${this.pokemon}`
    );
  }
}

function addPokemonToPlayer() {
  const types = ["fire", "water", "ground", "electric", "grass"];
  const result = [];

  for (let i = 0; i < 3; i++) {
    let type = types[Math.floor(Math.random() * types.length)];
    types.splice(types.indexOf(type), 1);
    const pokemonList = pokemons[type];
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];
    result.push({
      name: randomPokemon.name,
      type: type,
      attack: randomPokemon.attack,
      defense: randomPokemon.defense,
      agility: randomPokemon.agility,
    });
  }

  return result;
}

function getRandomTrainer() {
  const randomIndex = Math.floor(Math.random() * trainers.length);
  const randomTrainer = trainers[randomIndex];
  return randomTrainer;
}

export default createPlayers;
