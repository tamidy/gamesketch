var Game = /** @class */ (function () {
    function Game(img, url, name, description, tags, instructions) {
        this.img = img;
        this.url = url;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.instructions = instructions;
    }
    Game.prototype.greet = function () {
        return "hello";
    };
    return Game;
}());
var Sketch = /** @class */ (function () {
    function Sketch(url, name, description, tags) {
        this.url = url;
        this.name = name;
        this.description = description;
        this.tags = tags;
    }
    Sketch.prototype.greet = function () {
        return "hello";
    };
    return Sketch;
}());
//Game objects
var gamePirate = new Game("images/pirate.png", "https://tamidy.github.io/pirate-ship-vs-sea-monster-js/", "Pirate Ship vs. Sea Monster", "This is a pirate vs. sea monster game.", ["Turn-based", "p5.js"], "instructions");
var gameRabbit = new Game("images/rabbit.png", "https://tamidy.github.io/rabbit-vs-fox-js/", "This is a rabbit vs. fox game.", "Rabbit vs. Fox", ["Platform", "p5.js"], "instructions");
var gameBlue = new Game("images/blue.png", "https://tamidy.github.io/blue/", "Blue", "This is a blue game.", ["Puzzle", "p5.js"], "instructions");
var games = [gamePirate, gameRabbit, gameBlue];
var sketches = [];
window.onload = function () {
    displayGames();
    //displaySketches();
    //***********Check if a game has been selected***********
    var gameCards = document.getElementsByClassName("game");
    var gameID;
    var _loop_1 = function (i) {
        gameCards[i].addEventListener("click", function (event) {
            //Hide games-section, show game-display
            document.getElementById("games-section").style.display = "none";
            document.getElementById("game-display-section").style.display = "block";
            gameID = gameCards[i].id;
            //Find the object that the gameID matches
            for (var g = 0; g < games.length; g++) {
                if (games[g].url == gameID) {
                    //Make the link visible
                    document.getElementById('game-display').src = games[g].url;
                    //Change header text
                    //
                    //Add Instructions to bottom 
                }
            }
        });
    };
    for (var i = 0; i < gameCards.length; i++) {
        _loop_1(i);
    } //***********end check if a game has been selected***********
    //Back button
    var backButtonGames = document.getElementById("back-button-games");
    backButtonGames === null || backButtonGames === void 0 ? void 0 : backButtonGames.addEventListener("click", function (event) {
        //Show games-section, hide game-display
        document.getElementById("games-section").style.display = "block";
        document.getElementById("game-display-section").style.display = "none";
    });
    // FIXME: remove later?
    // let pathName = window.location.pathname;
    // let page = pathName.split("/").pop();
    // if (page == "one-game.html") {
    // }
}; //end window.onload
function displayGames() {
    var pageLink, imgSection, img, textSection, name, descr, tagsList, instr, link;
    var gamesSection = document.getElementById("games-section");
    for (var i = 0; i < games.length; i++) {
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
        for (var t = 0; t < games[i].tags.length; t++) { //tags from object
            var listItem = document.createElement("li");
            listItem.classList.add("py-2", "px-3");
            listItem.innerHTML = games[i].tags[t]; //individual tags from object
            tagsList.appendChild(listItem);
        }
        textSection.appendChild(tagsList);
        pageLink.appendChild(textSection);
        gamesSection === null || gamesSection === void 0 ? void 0 : gamesSection.appendChild(pageLink);
    }
} //end displayGames()
// function displaySketches() {
// }
// function display(link) {
// }
