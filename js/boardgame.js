var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var activePlayer = 0;
var square = document.querySelectorAll(".square");

var diceContainer = document.getElementById("diceContainer");
var diceDisplay = document.getElementById("diceDisplay");
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
var img2 = document.createElement("img");

var eventSquareFive = document.querySelector(".eventSquareFive");
var eventSquareEleven = document.querySelector(".eventSquareEleven");
var eventSquareSeventeen = document.querySelector(".eventSquareSeventeen");
var eventSquareTwenty = document.querySelector(".eventSquareTwenty");
var eventSquareTwentytwo = document.querySelector(".eventSquareTwentytwo");
var closeEvent = document.querySelector(".closeEvent");
var closeEventEleven = document.querySelector(".closeEventEleven");
var closeEventSeventeen = document.querySelector(".closeEventSeventeen");
var closeEventTwenty = document.querySelector(".closeEventTwenty");
var closeEventTwentytwo = document.querySelector(".closeEventTwentytwo");

/* TOKEN GIVEN BASED ON CHOICE FROM CHARACTER SELECT ON PREVIOUS PAGE */
switch(playerTwo) {
  case "Tyrion Lannister":
    img.src = "/images/characters/tyrion.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Daenerys Targaryen":
    img.src = "/images/characters/daenerys.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Jon Snow":
    img.src = "/images/characters/jon.svg";
    img.classList.add("token");
    img.classList.add("jon");
    square[0].append(img);
    break;
  case "Gilly":
    img.src = "/images/characters/gilly.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Shae":
    img.src = "/images/characters/shae.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Robb Stark":
    img.src = "/images/characters/robb.svg";
    img.classList.add("token");
    img.classList.add("robb");
    square[0].append(img);
    break;
  case "Arya Stark":
    img.src = "/images/characters/arya.svg";
    img.classList.add("token");
    img.classList.add("arya");
    square[0].append(img);
    break;
  case "Bronn":
    img.src = "/images/characters/bronn.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Drogo":
    img.src = "/images/characters/khal.svg";
    img.classList.add("token");
    square[0].append(img);
    break;
  case "Sansa Stark":
    img.src = "/images/characters/sansa.svg";
    img.classList.add("token");
    square[0].append(img);
}

switch(playerOne) {
  case "Tyrion Lannister":
    img2.src = "/images/characters/tyrion.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Daenerys Targaryen":
    img2.src = "/images/characters/daenerys.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Jon Snow":
    img2.src = "/images/characters/jon.svg";
    img2.classList.add("token2");
    img2.classList.add("jon");
    square[0].append(img2);
    break;
  case "Gilly":
    img2.src = "/images/characters/gilly.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Shae":
    img2.src = "/images/characters/shae.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Robb Stark":
    img2.src = "/images/characters/robb.svg";
    img2.classList.add("token2");
    img2.classList.add("robb");
    square[0].append(img2);
    break;
  case "Arya Stark":
    img2.src = "/images/characters/arya.svg";
    img2.classList.add("token2");
    img2.classList.add("arya");
    square[0].append(img2);
    break;
  case "Bronn":
    img2.src = "/images/characters/bronn.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Drogo":
    img2.src = "/images/characters/khal.svg";
    img2.classList.add("token2");
    square[0].append(img2);
    break;
  case "Sansa Stark":
    img2.src = "/images/characters/sansa.svg";
    img2.classList.add("token2");
    square[0].append(img2);
}


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

mySound = new sound("/sounds/tick.mp3");

function throwDice() {
  setTimeout(function() {
/* Pick a random number between 1 and 6 */
  var random = Math.floor((Math.random() * 6) + 1);
  dice.src = `/images/dice${random}.png`;

  diceDisplay.append(dice);
  mySound.play();

/* Check who is the active player and display text to let players know */
  if (activePlayer % 2 == 0) {
    currentPlayer.innerHTML = "Computer: It's Your Turn";
    currentPlayer.style.color = "#8e98a0";
    secondPlayer.style.color = "#124449";
    secondPlayer.style.fontWeight = "bold";
    firstPlayer.style.fontWeight = "400";
    diceContainer.style.display = "none";

  } else {
    currentPlayer.innerHTML = "Player One: It's Your Turn";
    currentPlayer.style.color = "#f4d501";
    firstPlayer.style.color = "#124449";
    firstPlayer.style.fontWeight = "bold";
    secondPlayer.style.fontWeight = "400";
    diceContainer.style.display = "block";
  }

  var token = document.querySelector(".token");
  var token2 = document.querySelector(".token2");

    for (var i = 0; i < squareContent.length; i++) {
      //console.log(squareContent[i]);
    }

  for (var i = 0; i < squareContent.length; i++) {
      var activeSquare = squareContent;
      var squareCont = squareContent[i];

      if(squareContent[i].contains(img2) && squareContent[0]) {
        var startPos = squareContent[i];
      }

      if(squareContent[i].classList[1] == random) {
          var currentIndex = squareContent[i];

        if(activePlayer %2 == 0) {
          if(startPos !== squareContent[0]) {
            nextP1(startPos, random);
          } else {
            squareContent[i + 1].append(token2);
            if (random !== 6) {
              activePlayer++;
              setTimeout(function() { throwDice() }, 1000);
            } else {
              diceContainer.style.display = "block";
              currentPlayer.style.color = "#f4d501";
              currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
            }
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
}, 100);
}

function nextP1(startPos, random) {
  var token2 = document.querySelector(".token2");
  for (var i = 0; i < squareContent.length; i++) {
    var newSquare = squareContent[i + random];
  }

  for (var i = 0; i < squareContent.length; i++) {
  if(squareContent[i].contains(img2) === true) {
    var startPos = squareContent[i];
    startPos.append(token2);

    var currentIndex2 = squareContent[i + random];
    //var endIndex = squareContent[29 - (random - 1)];
    if (startPos === squareContent[28]) {
      var endIndex = squareContent[29 - (random - 1)];
    }
    if (startPos === squareContent[27]) {
      var endIndex = squareContent[29 - (random - 2)];
    }
    if (startPos === squareContent[26]) {
      var endIndex = squareContent[29 - (random - 3)];
    }
    if (startPos === squareContent[25]) {
      var endIndex = squareContent[29 - (random - 4)];
    }
    if (startPos === squareContent[24]) {
      var endIndex = squareContent[29 - (random - 5)];
    }
  }
}

  if(currentIndex2 == squareContent[undefined]) {
    endIndex.append(token2);
    if (random !== 6) {
      activePlayer++;
      setTimeout(function() { throwDice() }, 1000);
    } else {
      diceContainer.style.display = "block";
      currentPlayer.style.color = "#f4d501";
      currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
    }
  } else if (currentIndex2 === squareContent[7]) {
    currentIndex2.append(token2);
    closeEvent.addEventListener("click", closeX);

    eventSquareFive.style.display = "block";
    function closeX() {
      eventSquareFive.style.display = "none";
      currentIndex2 = squareContent[7 - 2];
      currentIndex2.append(token2);
      if (random !== 6) {
        activePlayer++;
        setTimeout(function() { throwDice() }, 1000);
      } else {
        diceContainer.style.display = "block";
        currentPlayer.style.color = "#f4d501";
        currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
      }
    }

  } else if (currentIndex2 === squareContent[10]) {
    currentIndex2.append(token2);
    closeEventEleven.addEventListener("click", closeX);
    eventSquareEleven.style.display = "block";
    function closeX() {
      eventSquareEleven.style.display = "none";
      currentIndex2 = squareContent[10 + 3];
      currentIndex2.append(token2);
      if (random !== 6) {
        activePlayer++;
        setTimeout(function() { throwDice() }, 1000);
      } else {
        diceContainer.style.display = "block";
        currentPlayer.style.color = "#f4d501";
        currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
      }
    }

  } else if (currentIndex2 === squareContent[16]) {
    currentIndex2.append(token2);
    closeEventSeventeen.addEventListener("click", closeX);
    eventSquareSeventeen.style.display = "block";
    function closeX() {
      eventSquareSeventeen.style.display = "none";
      currentIndex2 = squareContent[16 + 6];
      currentIndex2.append(token2);
      if (random !== 6) {
        activePlayer++;
        setTimeout(function() { throwDice() }, 1000);
      } else {
        diceContainer.style.display = "block";
        currentPlayer.style.color = "#f4d501";
        currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
      }
    }

  } else if (currentIndex2 === squareContent[20]) {
    currentIndex2.append(token2);
    closeEventTwenty.addEventListener("click", closeX);

    eventSquareTwenty.style.display = "block";
    function closeX() {
      eventSquareTwenty.style.display = "none";
      currentIndex2 = squareContent[20 - 5];
      currentIndex2.append(token2);
      if (random !== 6) {
        activePlayer++;
        setTimeout(function() { throwDice() }, 1000);
      } else {
        diceContainer.style.display = "block";
        currentPlayer.style.color = "#f4d501";
        currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
      }
    }

  } else if (currentIndex2 === squareContent[23]) {
    currentIndex2.append(token2);
    closeEventTwentytwo.addEventListener("click", closeX);

    eventSquareTwentytwo.style.display = "block";
    function closeX() {
      eventSquareTwentytwo.style.display = "none";
      currentIndex2 = squareContent[23 - 1];
      currentIndex2.append(token2);
      if (random !== 6) {
        activePlayer++;
        setTimeout(function() { throwDice() }, 1000);
      } else {
        diceContainer.style.display = "block";
        currentPlayer.style.color = "#f4d501";
        currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
      }
    }

  } else if (currentIndex2 === squareContent[29]){
    currentIndex2.append(token2);
    win(activePlayer);
  } else if (currentIndex2 !== squareContent[undefined]){
    currentIndex2.append(token2);
    if (random !== 6) {
      activePlayer++;
      setTimeout(function() { throwDice() }, 1000);
    } else {
      diceContainer.style.display = "block";
      currentPlayer.style.color = "#f4d501";
      currentPlayer.innerHTML = "Player One: You rolled 6! You may throw the dice again";
    }
    //throwDice();
  }
}


function nextP2(startPos, random) {
  var token = document.querySelector(".token");
  for (var i = 0; i < squareContent.length; i++) {
    var newSquare = squareContent[i + random];
  }


  for (var i = 0; i < squareContent.length; i++) {
  if(squareContent[i].contains(img) === true) {
    var startPos = squareContent[i];
    startPos.append(token);

    var currentIndex2 = squareContent[i + random];
    //var endIndex2 = squareContent[29 - (random - 1)];
    if (startPos === squareContent[28]) {
      var endIndex2 = squareContent[29 - (random - 1)];
    }
    if (startPos === squareContent[27]) {
      var endIndex2 = squareContent[29 - (random - 2)];
    }
    if (startPos === squareContent[26]) {
      var endIndex2 = squareContent[29 - (random - 3)];
    }
    if (startPos === squareContent[25]) {
      var endIndex2 = squareContent[29 - (random - 4)];
    }
    if (startPos === squareContent[24]) {
      var endIndex2 = squareContent[29 - (random - 5)];
    }
  }
}

  if(currentIndex2 == squareContent[undefined]) {
    endIndex2.append(token);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  } else if (currentIndex2 === squareContent[7]) {
    currentIndex2.append(token);
    diceContainer.style.display = "none";

    eventSquareFive.style.display = "block";
    function closeX() {
      eventSquareFive.style.display = "none";
      currentIndex2 = squareContent[7 - 2];
      currentIndex2.append(token);
      diceContainer.style.display = "block";
    }
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }

  } else if (currentIndex2 === squareContent[10]) {
    currentIndex2.append(token);
    diceContainer.style.display = "none";

    eventSquareEleven.style.display = "block";
    function closeX() {
      eventSquareEleven.style.display = "none";
      currentIndex2 = squareContent[10 + 3];
      currentIndex2.append(token);
      diceContainer.style.display = "block";
    }
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  } else if (currentIndex2 === squareContent[16]) {
    currentIndex2.append(token);
    diceContainer.style.display = "none";

    eventSquareSeventeen.style.display = "block";
    function closeX() {
      eventSquareSeventeen.style.display = "none";
      currentIndex2 = squareContent[16 + 6];
      currentIndex2.append(token);
      diceContainer.style.display = "block";
    }
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  } else if (currentIndex2 === squareContent[20]) {
    currentIndex2.append(token);
    diceContainer.style.display = "none";

    eventSquareTwenty.style.display = "block";
    function closeX() {
      eventSquareTwenty.style.display = "none";
      currentIndex2 = squareContent[20 - 5];
      currentIndex2.append(token);
      diceContainer.style.display = "block";
    }
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  } else if (currentIndex2 === squareContent[23]) {
    currentIndex2.append(token);
    diceContainer.style.display = "none";

    eventSquareTwentytwo.style.display = "block";
    function closeX() {
      eventSquareTwentytwo.style.display = "none";
      currentIndex2 = squareContent[23 - 1];
      currentIndex2.append(token);
      diceContainer.style.display = "block";
    }
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  } else if (currentIndex2 === squareContent[29]){
    currentIndex2.append(token);
    win(activePlayer);
  } else if (currentIndex2 !== squareContent[undefined]){
    currentIndex2.append(token);
    setTimeout(closeX, 2000);
    if (random !== 6) {
      activePlayer++;
    } else {
      currentPlayer.style.color = "#8e98a0";
      currentPlayer.innerHTML = "Computer: You rolled 6! You may throw the dice again";
      setTimeout(function() { throwDice() }, 1000);
    }
  }
}

function win(activePlayer) {
  var board = document.querySelector(".background");
  if(activePlayer %2 == 0) {
    localStorage.setItem("activePlayer", 1);
    window.location.replace("win.html");
    } else {
      localStorage.setItem("activePlayer", 2);
      window.location.replace("win.html");
    }

}
