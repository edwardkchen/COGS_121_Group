var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
    goal: String,
    user_id: {
    	
    },
  });

GoalSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Goal', GoalSchema);
