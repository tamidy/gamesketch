class Game {
  img: string;
  url: string;
  name: string;
  description: string;
  tags: Array<string>;
  instructions: string;

  constructor(img: string, url: string, name: string, description: string, tags: Array<string>, instructions: string) {
    this.img = img;
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

//Game objects
const gamePirate = new Game(
  "images/pirate.png",
  "https://tamidy.github.io/pirate-ship-vs-sea-monster-js/", 
  "Pirate Ship vs. Sea Monster", 
  "This is a pirate vs. sea monster game.",
  ["Turn-based", "p5.js"], 
  "instructions"
);

const gameRabbit = new Game(
  "images/rabbit.png",
  "https://tamidy.github.io/rabbit-vs-fox-js/", 
  "This is a rabbit vs. fox game.",
  "Rabbit vs. Fox", 
  ["Platform", "p5.js"],
  "instructions"
);

const gameBlue = new Game(
  "images/blue.png",
  "https://tamidy.github.io/blue/", 
  "Blue", 
  "This is a blue game.", 
  ["Puzzle", "p5.js"],
  "instructions"
);

let games: Game[] = [gamePirate, gameRabbit, gameBlue];
let sketches: Sketch[] = [];

window.onload = function() {
  displayGames();
  //displaySketches();

  //***********Check if a game has been selected***********
  let gameCards = document.getElementsByClassName("game");
  let gameID;
  for (let i=0; i<gameCards.length; i++) {
    gameCards[i].addEventListener("click", (event) => {

      //Hide games-section, show game-display
      document.getElementById("games-section").style.display = "none";
      document.getElementById("game-display-section").style.display = "block";

      gameID = gameCards[i].id;

      //Find the object that the gameID matches
      for (let g=0; g<games.length; g++) {
        if (games[g].url == gameID) {

          //Make the link visible
          (<HTMLIFrameElement>document.getElementById('game-display')).src = games[g].url;

          //Change header text
          //

          //Add Instructions to bottom 

        }
      }
    });
  } //***********end check if a game has been selected***********

  //Back button
  let backButtonGames = document.getElementById("back-button-games");
  backButtonGames?.addEventListener("click", (event) => {
    //Show games-section, hide game-display
    document.getElementById("games-section").style.display = "block";
    document.getElementById("game-display-section").style.display = "none";
  });

  // FIXME: remove later?
  // let pathName = window.location.pathname;
  // let page = pathName.split("/").pop();
  // if (page == "one-game.html") {
    
  // }


} //end window.onload

function displayGames() {
  let pageLink, imgSection, img, textSection, name, descr, tagsList, instr, link; 
  let gamesSection = document.getElementById("games-section");

  for (let i=0; i<games.length; i++) {

    pageLink = document.createElement("a");
    //pageLink.href = "one-game.html"; //same for all links FIXME
    pageLink.classList.add("game", "p-3", "my-5");
    pageLink.id = games[i].url; //url from object is the id

    imgSection = document.createElement("section");
    imgSection.classList.add("game-img-section");
    img = document.createElement("img");
    img.src = games[i].img; //img from object
    img.alt = "Preview image of game";
    img.classList.add("game-img");
    imgSection.appendChild(img);
    pageLink.appendChild(imgSection);

    textSection = document.createElement("section");
    textSection.classList.add("game-text-section");
    name = document.createElement("h2");
    name.classList.add("game-name");
    name.innerHTML = games[i].name; //name from object
    textSection.appendChild(name);
    descr = document.createElement("p");
    descr.classList.add("game-descr");
    descr.innerHTML = games[i].description; //description from object
    textSection.appendChild(descr);
    tagsList = document.createElement("ul");
    tagsList.classList.add("game-tags", "p-0", "m-0");
    for (let t=0; t<games[i].tags.length; t++) { //tags from object
      let listItem = document.createElement("li");
      listItem.classList.add("py-2", "px-3");
      listItem.innerHTML = games[i].tags[t]; //individual tags from object
      tagsList.appendChild(listItem);
    }
    textSection.appendChild(tagsList);
    pageLink.appendChild(textSection);

    gamesSection?.appendChild(pageLink);
  } 

} //end displayGames()

// function displaySketches() {

// }

// function display(link) {

// }