/*jshint esversion: 6*/
var points;

$(document).ready(() => {
  points = 5000;
  document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
});

function smallfeed() {
  if (points >= 300 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 5;
    points -= 300;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}

function mediumfeed() {
  if (points >= 500 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 10;
    points -= 500;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}

function largefeed() {
  if (points >= 700 & document.getElementById('Hunger').value < 100) {
    document.getElementById('Hunger').value += 25;
    points -= 700;
    document.getElementById('totalPoints').innerText = 'Total Points: ' + points;
  }
}
