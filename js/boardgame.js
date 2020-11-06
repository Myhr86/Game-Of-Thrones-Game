var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');

var diceContainer = document.getElementById("diceContainer");
var dice = document.createElement("img");
var h3 = document.querySelector("H3");
var square = document.querySelectorAll(".square");
var gridSingleRight = document.querySelectorAll(".firstSingle");
var gridSingleLeft = document.querySelectorAll(".secondSingle");

var firstPlayer = document.getElementById("playerOne");
var secondPlayer = document.getElementById("playerTwo");
firstPlayer.innerHTML = playerOne;
secondPlayer.innerHTML = playerTwo;

var img = document.createElement("img");
img.src = "/images/testing.png";
img.classList.add("token");
console.log(square);
square[0].append(img);

dice0.src = "/images/dice1.png";
dice1.src = "/images/dice2.png";
dice2.src = "/images/dice3.png";
dice3.src = "/images/dice4.png";
dice4.src = "/images/dice5.png";
dice5.src = "/images/dice6.png";

function throwDice() {
  var random = Math.floor((Math.random() * 6) + 1);
  dice.src = "/images/dice" + random + ".png";

  h3.style.display = "none";
  diceContainer.append(dice);
}

console.log("yolo");
