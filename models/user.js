var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    total_points: {
      type: Number,
      default: 0,
    },
    hunger: {
      type: Number,
      default: 2500,
    },
    token: String,
  });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
