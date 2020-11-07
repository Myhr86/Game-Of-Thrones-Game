var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var p1 = "Player One";
var p2 = "Computer";
var activePlayer = 0;


var diceContainer = document.getElementById("diceContainer");
var dice = document.createElement("img");
var h3 = document.querySelector("H3");
var square = document.querySelectorAll(".square");
var squareContent = document.getElementsByClassName("square");
var gridSingleRight = document.querySelectorAll(".firstSingle");
var gridSingleLeft = document.querySelectorAll(".secondSingle");

var currentPlayer = document.getElementById("currentPlayer");
var p1TextNode = ": It's your turn!";
var p2TextNode = ": It's your turn!";
var firstPlayer = document.getElementById("playerOne");
var secondPlayer = document.getElementById("playerTwo");
firstPlayer.innerHTML = playerOne;
secondPlayer.innerHTML = playerTwo;


if (activePlayer % 2 == 0) {
  console.log("he");
  currentPlayer.append(p1);
  currentPlayer.append(p1TextNode);
} else {
  currentPlayer.append(p2);
  currentPlayer.append(p2TextNode);
}

var img = document.createElement("img");
img.src = "/images/testing.png";
img.classList.add("token");
console.log(square);
square[0].append(img);

function throwDice() {
  var random = Math.floor((Math.random() * 6) + 1);
  switch (random) {
    case 1:
      random = 1;
      dice.src = "/images/dice" + 1 + ".png";
      break;
    case 2:
      random = 2;
      dice.src = "/images/dice" + 2 + ".png";
      break;
    case 3:
      random = 3;
      dice.src = "/images/dice" + 3 + ".png";
      break;
    case 4:
      random = 4;
      dice.src = "/images/dice" + 4 + ".png";
      break;
    case 5:
      random = 5;
      dice.src = "/images/dice" + 5 + ".png";
      break;
    case 6:
      random = 6;
      dice.src = "/images/dice" + 6 + ".png";
      break;
  }

  h3.style.display = "none";
  diceContainer.append(dice);

  if(activePlayer % 2 == 0) {
    currentPlayer = firstPlayer;
  } else {
    currentPlayer = secondPlayer;
  }

  activePlayer++;
  console.log(activePlayer);

  move();
  function move() {
    var token = document.querySelector(".token");


    for (var i = 0; i < squareContent.length; i++) {
        var activeSquare = squareContent;
    }

    var tokenPos = activeSquare[random];

    var currentPos = tokenPos;
    tokenPos.append(token);
    console.log(currentPos);
    console.log(tokenPos);
  }
}
