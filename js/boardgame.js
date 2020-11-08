var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var p1 = "Player One";
var p2 = "Computer";
var activePlayer = 1;

function reset()
{  //activePlayer=0;//reset turn
  activePlayer++;
  console.log(activePlayer);
   var playerOne = document.getElementById("player1");
   var playerTwo = document.getElementById("player2");
   //Set initial positions
   for (var i = 0; i < squareContent.length; i++) {
       var activeSquare = squareContent;
   }
   console.log(activeSquare[random]);

var link2 = document.querySelector('[data-cell-index="0"]');
//console.log(link2);
   if(activePlayer % 2 == 0) {
     img.src = "/images/testing.png";
     img.classList.add("token");
     console.log(tokenPos);
     tokenPos.append(img2);
   } else {
     img2.src = "/images/testing.png";
     img2.classList.add("token2");
     tokenPos2.append(img2);
   }

    };

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

currentPlayer.innerHTML = "Player One";


var img = document.createElement("img");
img.src = "/images/testing.png";
img.classList.add("token");
square[0].append(img);

var img2 = document.createElement("img");
img2.src = "/images/testing.png";
img2.classList.add("token2");
square[0].append(img2);

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


  if (activePlayer % 2 == 0) {
    currentPlayer.innerHTML = "Player One: It's Your Turn";
  } else {
    currentPlayer.innerHTML = "Computer: It's Your Turn";
  }
  move(random);
}

  function move(random) {
    var token = document.querySelector(".token");
    var token2 = document.querySelector(".token2");

    for (var i = 0; i < squareContent.length; i++) {
        var activeSquare = squareContent;
    }

    var tokenPos = activeSquare[random];
    var tokenPos2 = activeSquare[random];


    const link = document.querySelector('[data-cell-index="random"]');
      console.log(tokenPos.dataset.cellIndex);

    var newPos = activeSquare[random];
    var myPos = link + random;
    var myPos2 = link + random;


    if(activePlayer %2 == 0) {
      tokenPos.append(token);
    } else {
      tokenPos2.append(token2);
    }


    reset();
  }
