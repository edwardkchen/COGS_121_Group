/*jshint esversion: 6*/
var points;

$(document).ready(() => {
  points = 5000;
  document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
});

function feedBurger() {
  if (points >= 100 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 5;
    points -= 100;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}

function feedChicken() {
  if (points >= 200 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 10;
    points -= 200;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}

function feedCorn() {
  if (points >= 300 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 15;
    points -= 300;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}

function feedGrapes() {
  if (points >= 400 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 25;
    points -= 400;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}
