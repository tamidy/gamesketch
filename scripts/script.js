var Game = /** @class */ (function () {
    function Game(url, name, description, tags, instructions) {
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
var games = [];
var sketches = [];
//Game objects
var gamePirate = new Game("https://tamidy.github.io/pirate-ship-vs-sea-monster-js/", "Pirate Ship vs. Sea Monster", "This is a pirate vs. sea monster game.", ["Turn-based", "p5.js"], "instructions");
var gameRabbit = new Game("", "", "", ["", ""], "");
var gameBlue = new Game("", "", "", ["", ""], "");
window.onload = function () {
    displayGames();
    //displaySketches();
};
function displayGames() {
    var gamesSection = document.getElementById("games-section");
    var h = document.createElement("h2");
    h.innerHTML = gamePirate.name;
    gamesSection === null || gamesSection === void 0 ? void 0 : gamesSection.appendChild(h);
}
// function displaySketches() {
// }
// function display(link) {
// }
