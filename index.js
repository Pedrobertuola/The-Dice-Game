function randomSix() {
        var number = Math.random();
        number = number * 6;
        number = Math.floor(number) + 1;
        return number
}



randomNumber1 = randomSix()



randomNumber2 = randomSix()

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomImageSource2 = "images/dice"+ randomNumber2 + ".png"; 

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)





if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}  else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw"
} else if (randomNumber2> randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}