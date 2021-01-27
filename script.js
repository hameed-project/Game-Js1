var randomNumber1 = Math.floor(Math.random() * 6) + 1; //why (+1) to get Range 1-6 dice 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //Pick dice images

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll('img')[0]; //array of [0] first image

image1.setAttribute('src',randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}