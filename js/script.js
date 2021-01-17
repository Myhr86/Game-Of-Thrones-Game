localStorage.setItem('state', 1);

fetch("characters.json")
  .then(result => result.json())
  .then((res) => {
    thronesInfo(res);
    })
  .catch(err => console.log(err))

function thronesInfo(result) {
  var cardBody = document.getElementsByClassName("card");
  var characterArray = [result[1051], result[1302], result[582], result[1426], result[1934], result[1876], result[147], result[216], result[1345], result[956]];
  var srcArray = ["tyrion.svg", "daenerys.svg", "jon.svg", "gilly.svg", "shae.svg", "robb.svg", "arya.svg", "bronn.svg", "khal.svg", "sansa.svg"]
  var imgClasses = ["first", "second","third","fourth", "fifth", "sixt","sevent", "eighth", "nineth", "tenth"];
  for (var i = 0; i < imgClasses.length; i++) {
  }
  for (var i = 0; i < srcArray.length; i++) {
  }

  for (var i = 0; i < cardBody.length; i++) {

    for (var j = 0; i < characterArray.length; i++) {
      var div = document.createElement("div");
      var imageBox = document.createElement("div");
      var img = document.createElement("img");
      var img2 = document.createElement("img");
      var h3 = document.createElement("h3");
      var spanTitle = document.createElement("span");
      var spanGender = document.createElement("span");
      var p = document.createElement("p");
      var genderP = document.createElement("p");
      var hr = document.createElement("hr");
      var a = document.createElement("a");

      a.href = "#news";
      var spanTitleText = "Title: ";
      var imgSource = "images/characters/";
      var pTitleText = characterArray[i].Titles[0];
      var male = "Male";
      var female = "Female";

      if (characterArray[i].IsFemale === false) {
        genderP.append(male);
      } else {
        genderP.append(female);
      }
      genderP.style.fontWeight = "bold";
      spanTitle.style.fontWeight = "bold";
      img.src = imgSource + srcArray[i];
      img.classList.add("characters");
      img.classList.add(imgClasses[i]);
      div.classList.add("card-body");
      h3.classList.add("card-title");
      h3.classList.add("card-font");
      imageBox.classList.add("imageBox");

      spanTitle.append(spanTitleText);
      p.append(spanTitle);
      p.append(pTitleText);

      h3.append(characterArray[i].Name);
      imageBox.append(img);
      div.append(imageBox);
      div.append(h3);
      div.append(hr);
      div.append(genderP);
      div.append(p);
      cardBody[i].append(div);

      var choiceOne = document.getElementById("choiceOne");
      var choiceTwo = document.getElementById("choiceTwo");

      var button = document.createElement("button");
      button.classList.add("choiceButton");
      var buttonText = "Choose";
    }
  }
}

/* Functions for choosing two characters */
fetch("characters.json")
  .then(result2 => result2.json())
  .then((res) => {
    chosenFunction(res);
    })
  .catch(err => console.log(err))


  function chosenFunction(result2) {
    var state = localStorage.getItem('state');
    var stateOne = document.getElementById("stateOne");
    var stateTwo = document.getElementById("stateTwo");
    //localStorage.setItem('state', 1);
    stateOne.onclick = function() {
      localStorage.setItem('state', 1);
      stateTwo.classList.remove("active");
      stateOne.classList.add("active");
    }
    stateTwo.onclick = function(){
      //state = 2;
      localStorage.setItem('state', 2);
      stateOne.classList.remove("active");
      stateTwo.classList.add("active");
    }

    /* Character Choice Functions */
      var chosen = document.querySelectorAll(".card");
      var characterArray = [result2[1051], result2[1302], result2[582], result2[1426], result2[1934], result2[1876], result2[147], result2[216], result2[1345], result2[956]];
      for (var i = 0; i < chosen.length; i++) {
        chosen[i].addEventListener("click", chosenFunction);
        if (state == 1) {
          chosen[i].classList.remove("cardChosen");
        } else {
          chosen[i].classList.remove("cardChosen2");
        }
      }

    if (this == chosen[0] && state == 1) {
      choiceOne.innerHTML = "Tyrion Lannister";
      chosen[0].classList.add("cardChosen");
    } else if (this == chosen[1] && state == 1) {
      choiceOne.innerHTML = "Daenerys Targaryen";
      chosen[1].classList.add("cardChosen");
    } else if (this == chosen[2] && state == 1) {
      choiceOne.innerHTML = "Jon Snow";
      chosen[2].classList.add("cardChosen");
    } else if (this == chosen[3] && state == 1) {
      choiceOne.innerHTML = "Gilly";
      chosen[3].classList.add("cardChosen");
    } else if (this == chosen[4] && state == 1) {
      choiceOne.innerHTML = "Shae";
      chosen[4].classList.add("cardChosen");
    } else if (this == chosen[5] && state == 1) {
      choiceOne.innerHTML = "Robb Stark";
      chosen[5].classList.add("cardChosen");
    } else if (this == chosen[6] && state == 1) {
      choiceOne.innerHTML = "Arya Stark";
      chosen[6].classList.add("cardChosen");
    } else if (this == chosen[7] && state == 1) {
      choiceOne.innerHTML = "Bronn";
      chosen[7].classList.add("cardChosen");
    } else if (this == chosen[8] && state == 1) {
      choiceOne.innerHTML = "Drogo";
      chosen[8].classList.add("cardChosen");
    } else if (this == chosen[9] && state == 1) {
      choiceOne.innerHTML = "Sansa Stark";
      chosen[9].classList.add("cardChosen");
    } else if (this == chosen[0] && state == 2) {
      choiceTwo.innerHTML = "Tyrion Lannister";
      chosen[0].classList.add("cardChosen2");
    } else if (this == chosen[1] && state == 2) {
      choiceTwo.innerHTML = "Daenerys Targaryen";
      chosen[1].classList.add("cardChosen2");
    } else if (this == chosen[2] && state == 2) {
      choiceTwo.innerHTML = "Jon Snow";
      chosen[2].classList.add("cardChosen2");
    } else if (this == chosen[3] && state == 2) {
      choiceTwo.innerHTML = "Gilly";
      chosen[3].classList.add("cardChosen2");
    } else if (this == chosen[4] && state == 2) {
      choiceTwo.innerHTML = "Shae";
      chosen[4].classList.add("cardChosen2");
    } else if (this == chosen[5] && state == 2) {
      choiceTwo.innerHTML = "Robb Stark";
      chosen[5].classList.add("cardChosen2");
    } else if (this == chosen[6] && state == 2) {
      choiceTwo.innerHTML = "Arya Stark";
      chosen[6].classList.add("cardChosen2");
    } else if (this == chosen[7] && state == 2) {
      choiceTwo.innerHTML = "Bronn";
      chosen[7].classList.add("cardChosen2");
    } else if (this == chosen[8] && state == 2) {
      choiceTwo.innerHTML = "Drogo";
      chosen[8].classList.add("cardChosen2");
    } else if (this == chosen[9] && state == 2) {
      choiceTwo.innerHTML = "Sansa Stark";
      chosen[9].classList.add("cardChosen2");
    }

    var infoX = document.getElementById("infoX");
    var hintButton = document.getElementById("hintButton");
    var choiceInfo = document.getElementById("choiceInfo");
    hintButton.addEventListener("click", function() {
      choiceInfo.style.display = "block";
    });

    infoX.addEventListener("click", function() {
      choiceInfo.style.display ="none";
    })

    var playNow = document.querySelector(".playNow");
    var playButton = document.getElementById("playButton");
    var playLink = document.getElementById("playLink");
    var a = document.createElement("a");
    var alert = document.querySelector(".alert");
    var alertX = document.getElementById("alertX");

    //playLink.href = "";
    if(choiceOne.innerHTML !== "" && choiceTwo.innerHTML !== "") {
      playButton.style.background = "green";
      playButton.style.fontWeight = "bold";
      a.href = "boardgame.html";
      a.append(playButton);
      playNow.append(a);
      playButton.addEventListener("click", startGame);
      function startGame() {
        var char = choiceOne.textContent;
        var charTwo = choiceTwo.textContent;
        var playerChoiceOne = localStorage.setItem('playerOne', char);
        var playerChoiceTwo = localStorage.setItem('playerTwo', charTwo);
      }
    } else if (choiceOne.innerHTML === "" || choiceTwo.innerHTML === ""){
      playButton.addEventListener("click", function() {
        if (choiceOne.innerHTML === "" || choiceTwo.innerHTML === "") {
          alert.style.display = "block";
        }

        alertX.addEventListener("click", function() {
          alert.style.display ="none";
        })
        //alert("Please choose two players");
      });
    }

}
