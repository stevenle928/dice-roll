
  //function randomizes a number from 0-5
  //function then uses javascript functions to change the source of the img element to the proper image
  var roller1 = Math.floor(Math.random() * 6);
  var rolled1 = "images/dice" + (roller1 + 1) + ".png";

  document.querySelector(".img1").setAttribute("src", rolled1);

  var roller2 = Math.floor(Math.random() * 6);
  var rolled2 = "images/dice" + (roller2 + 1) + ".png";
  document.querySelector(".img2").setAttribute("src", rolled2);

  if (roller1>roller2){
    document.querySelector("h1").innerHTML = "Player 1 is the Winner!";
  }
  else if (roller1 === roller2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner!";
  }
