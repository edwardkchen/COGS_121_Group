/*jshint esversion: 6*/
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const expressSession = require('express-session');
const User = require('./models/user');

const app = express();

const mongoURI = 'mongodb://nesa:nesaatcogs121@ds031632.mlab.com:31632/pets_app';

var connected = false;

// Create mongo connection
mongoose.connect(mongoURI);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.hbs', expressHbs({}));
app.set('view engine', '.hbs');

// Passport Configuration
app.use(expressSession({
    secret: 'my secret key',
    resave: false,
    saveUninitialized: false,
  }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

const fakeDB = {
  John: {
    pet: 'Chihuahua',
    img: 'imgs/cat/cat1.png',
    goals: [
      'Run 2 miles.',
      'Burn 500 calories',
      'Weigh 150 lbs',
    ],
  },
};

const OAuth2 = {
  id: '22CRV9',
  type: 'token',
  scope: 'profile activity weight',
  uri: 'http://localhost:3000/profile',
  prompt: 'login consent',
};

var encoded = 'https://www.fitbit.com/oauth2/authorize?' +
  'response_type=' + encodeURIComponent(OAuth2.type) +
  '&client_id=' + encodeURIComponent(OAuth2.id) +
  '&redirect_uri=' + encodeURIComponent(OAuth2.uri) +
  '&scope=' + encodeURIComponent(OAuth2.scope);

app.get('/', (req, res) => {
  console.log('Running into login page!');
  res.render('login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// handling login logic
app.post('/login', passport.authenticate('local',
  {
    successRedirect: '/home',
    failureRedirect: '/login',
  }), function (req, res) {
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
  console.log(newUser);
  console.log(req.body.password);
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/home');
    });
  });
});

app.get('/home', (req, res) => {
  console.log('Running into home page!');
  res.render('home');
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
  console.log('Running into friends page!');
  res.render('friends');
});

app.get('/goals', (req, res) => {
  console.log('Running into goals page!');
  res.render('goals');
});

app.get('/house', (req, res) => {
  console.log('Running into house page!');
  res.render('house');
});

app.get('/profile', (req, res) => {
  console.log('Running into profile page!');
  if (!req.session.loggedIn) {
    return res.render('profile');
  } else {
    req.session.loggedIn = true;
    res.redirect('/connect');
  }
});

app.post('/token', (req, res) => {
  const token = req.body.token;
  User.findById(req.user._id, (err, user) => {
    if (err) {
      res.redirect('back');
    } else {
      user.token = token;
      user.save();
    }
  });
});

//logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

app.listen(3000, () => {
  console.log('Server started!');
});
