var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
    goal_title: String,
    date: String,
    amount: Number,
    isBurn: Boolean,
    isWalk: Boolean,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  });


module.exports = mongoose.model('Goal', GoalSchema);
