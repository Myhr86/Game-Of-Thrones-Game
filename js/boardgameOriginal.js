var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var p1 = "Player One";
var p2 = "Computer";
var activePlayer = 0;
var tokenPos;
var tokenPos2;
var square = document.querySelectorAll(".square");

var diceContainer = document.getElementById("diceContainer");
var dice = document.createElement("img");
var h3 = document.querySelector("H3");
var squareContent = document.getElementsByClassName("square");

var currentPlayer = document.getElementById("currentPlayer");
var p1TextNode = ": It's your turn!";
var p2TextNode = ": It's your turn!";
var firstPlayer = document.getElementById("playerOne");
var secondPlayer = document.getElementById("playerTwo");
firstPlayer.innerHTML = playerOne;
secondPlayer.innerHTML = playerTwo;

currentPlayer.innerHTML = "Player One: It's your turn!";


var img = document.createElement("img");
img.src = "/images/testing2.png";
img.classList.add("token");
square[0].append(img);

var img2 = document.createElement("img");
img2.src = "/images/testing.png";
img2.classList.add("token2");
square[0].append(img2);


function throwDice() {
  var random = Math.floor((Math.random() * 6) + 1);
  dice.src = `/images/dice${random}.png`;

  h3.style.display = "none";
  diceContainer.append(dice);

  if (activePlayer % 2 == 0) {
    currentPlayer.innerHTML = "Computer: It's Your Turn";
  } else {
    currentPlayer.innerHTML = "Player One: It's Your Turn";
  }

  var token = document.querySelector(".token");
  var token2 = document.querySelector(".token2");

    for (var i = 0; i < squareContent.length; i++) {
      //console.log(squareContent[i]);
    }

  for (var i = 0; i < squareContent.length; i++) {
      var activeSquare = squareContent;
      var tokenPos = activeSquare[random];
      var tokenPos2 = activeSquare[random];
      var squareCont = squareContent[i];

      if(squareContent[i].contains(img2) && squareContent[0]) {
        var startPos = squareContent[i];
      }

      if(squareContent[i].classList[1] == random) {
          var tokenPos;
          var currentIndex = squareContent[i];

        if(activePlayer %2 == 0) {
          //console.log(startPos);
          if(startPos !== squareContent[0]) {
            nextP1(startPos, random);
          } else {
            squareContent[i + 1].append(token2);
            activePlayer++;
          }


        } else {
          if(startPos !== squareContent[0]) {
            nextP2(startPos, random);
          } else {
            squareContent[i + 1].append(token2);
            activePlayer++;
          }
        }
      }
  }
}

function nextP1(startPos, random) {
  var token2 = document.querySelector(".token2");
  for (var i = 0; i < squareContent.length; i++) {
    var newSquare = squareContent[i + random];

    if(square[i].firstChild) {
    }
  }

  for (var i = 0; i < squareContent.length; i++) {
  if(squareContent[i].contains(img2) === true) {
    var startPos = squareContent[i];
    startPos.append(token2);

    var currentIndex2 = squareContent[i + random];
    var endIndex = squareContent[29 - (random - 1)];
  }
}

  if(currentIndex2 == squareContent[undefined]) {
    endIndex.append(token2);
  } else if (currentIndex2 === squareContent[29]){
    currentIndex2.append(token2);
    win(activePlayer);
  } else if (currentIndex2 !== squareContent[undefined]){
    currentIndex2.append(token2);
    activePlayer++;
  }

}


function nextP2(startPos, random) {
  var token = document.querySelector(".token");
  for (var i = 0; i < squareContent.length; i++) {
    var newSquare = squareContent[i + random];

    if(square[i].firstChild) {
    }
  }


  for (var i = 0; i < squareContent.length; i++) {
  if(squareContent[i].contains(img) === true) {
    var startPos = squareContent[i];
    startPos.append(token);

    var currentIndex2 = squareContent[i + random];
    var endIndex2 = squareContent[29 - (random - 1)];
  }
}

  if(currentIndex2 == squareContent[undefined]) {
    endIndex2.append(token);
  }  else if (currentIndex2 === squareContent[29]){
    currentIndex2.append(token);
    win(activePlayer);
  } else if (currentIndex2 !== squareContent[undefined]){
    currentIndex2.append(token);
    activePlayer++;
  }
}

function win(activePlayer) {
  if(activePlayer %2 == 0) {
    console.log("The winner is " + p1);
    } else {
      console.log("The winner is " + p2);
      var board = document.querySelector(".background");
    }

}
