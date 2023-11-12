$(document).ready(function () {
    function rollDice() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      function playerOne() {
        $(".container h1").text("🚩Player 1 Wins!");
        $("img.img1").attr("src", "images/dice" + randomNumber1 + ".png");
        $("img.img2").attr("src", "images/dice" + randomNumber2 + ".png");
      }
  
      if (randomNumber1 > randomNumber2 && randomNumber1 === 2) {
        playerOne();
      } else if (randomNumber1 > randomNumber2 && randomNumber1 === 3) {
        playerOne();
      } else if (randomNumber1 > randomNumber2 && randomNumber1 === 4) {
        playerOne();
      } else if (randomNumber1 > randomNumber2 && randomNumber1 === 5) {
        playerOne();
      } else if (randomNumber1 > randomNumber2 && randomNumber1 === 6) {
        playerOne();
      } else if (randomNumber1 === randomNumber2) {
        $(".container h1").text("Draw!");
        $("img.img1").attr("src", "images/dice" + randomNumber1 + ".png");
        $("img.img2").attr("src", "images/dice" + randomNumber2 + ".png");
      } else {
        $(".container h1").text("Player 2 Wins!🚩");
        $("img.img1").attr("src", "images/dice" + randomNumber1 + ".png");
        $("img.img2").attr("src", "images/dice" + randomNumber2 + ".png");
      }
    }
  
    rollDice();
    $("#refreshButton").on("click", function () {
      rollDice();
    });
  });