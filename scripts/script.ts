class Game {
  url: string;
  name: string;
  description: string;
  tags: Array<string>;
  instructions: string;

  constructor(url: string, name: string, description: string, tags: Array<string>, instructions: string) {
    this.url = url;
  this.name = name;
    this.description = description;
    this.tags = tags;
    this.instructions = instructions;
  }
  
  greet() {
    return "hello";
  }
}

class Sketch {
  url: string;
  name: string;
  description: string;
  tags: Array<string>;

  constructor(url: string, name: string, description: string, tags: Array<string>) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }
  
  greet() {
    return "hello";
  }
}

let games: Game[] = [];
let sketches: Sketch[] = [];

//Game objects
const gamePirate = new Game(
  "https://tamidy.github.io/pirate-ship-vs-sea-monster-js/", 
  "Pirate Ship vs. Sea Monster", 
  "This is a pirate vs. sea monster game.",
  ["Turn-based", "p5.js"], 
  "instructions"
);

const gameRabbit = new Game(
  "", 
  "", 
  "", 
  ["", ""], 
  ""
);

const gameBlue = new Game(
  "", 
  "", 
  "", 
  ["", ""], 
  ""
);

window.onload = function() {
  displayGames();
  //displaySketches();
}

function displayGames() {

    let gamesSection = document.getElementById("games-section");

    let h = document.createElement("h2");
    h.innerHTML = gamePirate.name;
    gamesSection?.appendChild(h);
    

}

// function displaySketches() {

// }

// function display(link) {

// }