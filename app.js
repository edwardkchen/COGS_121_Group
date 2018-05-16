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

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

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

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/', (req, res) => {
  console.log('Running into login page!');
  res.render('login');
});

// handling login logic
app.post('/login', passport.authenticate('local',
    {
        successRedirect: "/home",
        failureRedirect: "/login"
    }), function(req, res) {
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/home');
        });
    });
});

app.get('/home', (req, res) => {
  console.log('Running into home page!');
  res.render('home');
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
  res.render('profile');
});

app.get('/feed', (req, res) => {
  console.log('Running into feed page!');
  res.render('feed');
});


app.listen(3000, () => {
  console.log('Server started!');
});
