/* Create an ajax call to the database for user account goals.
Saves date and amount of steps and calories in the database
*/
var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
    goal_title: String,
    date: String,
    amount: Number,
    isBurn: Boolean,
    isWalk: Boolean,
    isDone: Boolean,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  });


module.exports = mongoose.model('Goal', GoalSchema);
