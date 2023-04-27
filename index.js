import helper from "./functions/helperFunctions.js";
import selectPokemon from "./functions/selectPokemons.js";
import battle from "./functions/battle.js";

const gameStart = helper.compose(
  helper.startMessageAndCreatePlayer,
  helper.printBattleTable,
  selectPokemon,
  battle
);

gameStart();
