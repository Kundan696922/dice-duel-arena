function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");

    image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    image2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    var resultText;
    if (randomNumber1 > randomNumber2) {
        resultText = "🎖️ Winner is Player 1!";
    } else if (randomNumber1 === randomNumber2) {
        resultText = "⚖️ It's a Draw!";
    } else {
        resultText = "🏆 Winner is Player 2!";
    }

    document.querySelector("h1").innerText = resultText;
}
