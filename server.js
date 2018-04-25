const express = require('express');
const app = express();
const path = require('path');
var http = require('http');

const fakeDB = {
  John: {
    pet: 'Dog',
    img: 'img/dog.jpg',
    goals: [
      'Run a mile.',
      'Read a book',
      'Go to the gym.',
    ],
  },
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('code'));

app.get('/', (req, res) => {
  console.log('Running into index page!');
  res.sendFile(path.join(__dirname + '/code/login.html'));
});

app.get('/home', (req, res) => {
  console.log('Running into index page!');
  res.sendFile(path.join(__dirname + '/code/home.html'));
});

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  const data = fakeDB[username];
  if (data) {
    res.send(data);
  } else {
    res.send({});
  }
});

app.get('/friends', (req, res) => {
  console.log('Running into friends page!');
  res.sendFile(path.join(__dirname + '/code/friends.html'));
});

app.get('/goals', (req, res) => {
  console.log('Running into goals page!');
  res.sendFile(path.join(__dirname + '/code/goals.html'));
});

app.get('/house', (req, res) => {
  console.log('Running into house page!');
  res.sendFile(path.join(__dirname + '/code/house.html'));
});

app.get('/profile', (req, res) => {
  console.log('Running into profile page!');
  res.sendFile(path.join(__dirname + '/code/profile.html'));
});

app.get('/feed', (req, res) => {
  console.log('Running into feed page!');
  res.sendFile(path.join(__dirname + '/code/feed.html'));
});

app.listen(3000, () => {
  console.log('Server started!');
});
