var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var p1 = "Player One";
var p2 = "Computer";
var activePlayer = 1;
var tokenPos;
var tokenPos2;
var square = document.querySelectorAll(".square");
var squareContent = document.getElementsByClassName("square");


square[0].classList.add("myToken");
square[0].classList.add("myToken2");
var myToken = document.querySelector(".myToken");
var myToken2 = document.querySelector(".myToken2");


function reset(tokenPos, tokenPos2)
{
  console.log(tokenPos);
  activePlayer++;
   var playerOne = document.getElementById("player1");
   var playerTwo = document.getElementById("player2");
};

var diceContainer = document.getElementById("diceContainer");
var dice = document.createElement("img");
var h3 = document.querySelector("H3");

var currentPlayer = document.getElementById("currentPlayer");
var p1TextNode = ": It's your turn!";
var p2TextNode = ": It's your turn!";
var firstPlayer = document.getElementById("playerOne");
var secondPlayer = document.getElementById("playerTwo");
firstPlayer.innerHTML = playerOne;
secondPlayer.innerHTML = playerTwo;

currentPlayer.innerHTML = "Player One: It's your turn!";


var img = document.createElement("img");
img.src = "/images/testing.png";
img.classList.add("token");
square[0].append(img);

var img2 = document.createElement("img");
img2.src = "/images/testing2.png";
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

    console.log(squareContent[7]);
    console.log(myToken.classList[2]);
    for (var i = 0; i < 1; i++) {
      console.log(squareContent[i].classList.contains("myToken"));
        if (squareContent) {
          if (squareContent[random].classList[1]) {
            squareContent[random].append(token);
            squareContent[random].classList.add("myToken");
            console.log(squareContent[i]);
            if (squareContent[i]) {
              squareContent[i].classList.remove("myToken");
            }
            //squareContent[0].classList.remove("myToken");

          }
          console.log(squareContent[random]);
        }
    }

    /*var tokenPos = activeSquare[random];
    var tokenPos2 = activeSquare[random];
    //console.log(tokenPos.classList[1]);
    console.log(tokenPos);

    if(activePlayer %2 == 0) {
      tokenPos.append(token2);
      tokenPos.classList.add(".token");
      reset(tokenPos);
    } else {
      tokenPos2.append(token);
      tokenPos.classList.add(".token");
      reset(tokenPos2);
    }*/
  }
