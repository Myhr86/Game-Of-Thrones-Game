var state = localStorage.getItem('state');
var playerOne = localStorage.getItem('playerOne');
var playerTwo = localStorage.getItem('playerTwo');
var p1 = "Player One";
var p2 = "Computer";
var i = 0;
var speed = 50;

var activePlayer = localStorage.getItem("activePlayer");
console.log(activePlayer);
if(activePlayer == 1) {
  var txt = "The winner is: " + p1;
  writeText();
} else {
  var txt = "The winner is: " + p2;
  writeText();
}

function writeText() {
  if (i < txt.length) {
    document.getElementById("congratAnim").innerHTML += txt.charAt(i);
    i++
    setTimeout(writeText, speed);
  }
}

pokalMove();

function pokalMove() {
  var pokal = document.getElementById("animatedPokal");
  var container = document.querySelector(".contgratulations");
  console.log(container);
  var pos = 0;
  //var id = setInterval(frame, 10);
  if (animatedPokal.width >= 151) {
    var id = setInterval(frame, 10);
  } else if (animatedPokal.width <= 150) {
    var id = setInterval(frameSmall, 10);
  }

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      pokal.style.left = pos + 'px';
    }
  }

  function frameSmall() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      pokal.style.left = pos + 'px';
    }
  }
}

function restartButton() {
  var a = document.createElement("a");
  a.href = "index.html";
  var button = document.createElement("button");
  var buttonText = "Restart";
  button.classList.add("restartButton");
  button.append(buttonText);
  a.append(button);
  var pokalContainer = document.querySelector(".contgratulations");

  pokalContainer.append(a);
}

setTimeout(function() { restartButton() }, 4000);
