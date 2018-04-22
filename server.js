//console.log('hello world!');

const express = require('express');
const app = express();
const path = require('path');
var http = require('http');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'code')));

app.get('/', (req, res) => {
  console.log('Running into index page!');
  res.sendFile(path.join(__dirname + '/code/index.html'));
});
app.get('/friends', (req, res) => {
  console.log('Running into friends page!');
  res.sendFile(path.join(__dirname + '/code/Friends.html'));
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
  res.sendFile(path.join(__dirname + '/code/Profile.html'));
});
app.get('/feed', (req, res) => {
  console.log('Running into feed page!');
  res.sendFile(path.join(__dirname + '/code/feed.html'));
});

app.listen(3000, () => {
  console.log('Server started!');
});
