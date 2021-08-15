let card = [];
let card1 = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function startGame() {
  card = [];
  hasBlackJack = false;
  isAlive = true;
  if (card.length <= 1) {
    drawcard(2);
  }
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    drawcard(1);
  }
}

function renderGame() {
  card1 = card.map((num) => {
    return num >= 2 && num <= 10 ? num : num === 1 ? 1 : 10;
  });
  sum = card1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  document.getElementById("card-img").innerHTML = "";
  card.forEach((card) => {
    let btn = document.getElementById("card-img");
    btn.innerHTML += `<img src="./images/club_${card <= 13 ? card : 1}.png" />`;
  });
  document.getElementById("message-el").textContent = message;
  document.getElementById("card1-el").textContent = card1.join(" ");
  document.getElementById("sum-el").textContent = sum;
  document.getElementById("sum-el").style.color = "blue";
}

function drawcard(num) {
  for (let index = 0; index < num; index++) {
    let random = getRandomNumber(1, 14);
    if (random === 1 || random === 14) {
      confirm(
        "you have gotten an Ace Card: \n Select Yes for 10 value \n Select No for 1 value"
      )
        ? card.push(14)
        : card.push(1);
    } else {
      card.push(random);
    }

    renderGame();
  }
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
