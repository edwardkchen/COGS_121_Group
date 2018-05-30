var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    total_points: {
      type: Number,
      default: 0,
    },
    fitbit_token: {
      type: String,
    },
    courses: {
      courses: []
    }
  });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
