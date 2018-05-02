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

const OAuth2 = {
  id: '22CRV9',
  type: 'token',
  scope: 'profile',
  uri: 'http://localhost:3000/profile',
  prompt: 'login consent',
};

var encoded = 'https://www.fitbit.com/oauth2/authorize?' +
  'response_type=' + encodeURIComponent(OAuth2.type) +
  '&client_id=' + encodeURIComponent(OAuth2.id) +
  '&redirect_uri=' + encodeURIComponent(OAuth2.uri) +
  '&scope=' + encodeURIComponent(OAuth2.scope);

app.use(express.static('code'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/home.html'));
});

app.get('/connect', (req, res) => {
  res.redirect(encoded);
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
  res.sendFile(path.join(__dirname + '/code/friends.html'));
});

app.get('/goals', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/goals.html'));
});

app.get('/house', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/house.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/profile.html'));
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname + '/code/feed.html'));
});

app.listen(3000, () => {
  console.log('Server started!');
});
