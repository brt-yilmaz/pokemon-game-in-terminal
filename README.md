# A Simple Pokemon Game in the Terminal

This is a simple Pokemon game that can be played in the terminal.
The game involves two players choosing a trainer each and taking 
turns to make moves to try to defeat each other's Pokemon. Players 
select their moves hitting key combinations, and the results are 
displayed on the screen. 

This README.md file provides information on how to play the game.
Please read the instructions below before downloading and playing 
the game.

## Installation

To use this game, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. You can download and install both from their official websites.

Once you have Node.js and npm installed, you can follow these steps to install and run the game:

1. Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:brt-yilmaz/pokemon-game-in-terminal.git
```
2. Navigate to the directory where you have downloaded/cloned this game.

3. Install the required dependencies using the following command:

```bash
npm install
```  
3. Type the following command in your terminal to install the required packages:

```bash
npm install readline-sync chalk
```

This command installs two packages: `readline-sync` and `chalk`.

4. Wait for the packages to install. Once they are installed, you can run the game.

## Usage
### Using without ES6 Modules

To use `readline-sync` and `chalk`, you need to require them in your JavaScript file:

```js
const readlineSync = require("readline-sync");
const chalk = require("chalk");
```
After requiring them, you can use their functions in your code.

Here is an example of using readline-sync to get user input:

```javascript
const name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);
```

And here is an example of using chalk to style text:

```javascript
console.log(chalk.red("This text is red."));
console.log(chalk.green.bold("This text is bold and green."));
```
### Using with ES6 Modules

If you have selected "type: module" in your `package.json` file, you can use ES6 module syntax to import `readline-sync` and `chalk` in your code.

Here is an example of importing `readline-sync` and `chalk` as ES6 modules:

```js
import readlineSync from "readline-sync";
import chalk from "chalk";

const name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);

console.log(chalk.red("This text is red."));
console.log(chalk.green.bold("This text is bold and green."));
```
For more information on using ES6 modules, please refer to the Node.js documentation page on ES modules. [ES6 modules documentation page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).


These are just a few examples of how you can use readline-sync and chalk in your code. For more information and examples, please refer to their respective documentation pages.
- [readline-sync](https://github.com/anseki/readline-sync)
- [chalk](https://github.com/chalk/chalk)
