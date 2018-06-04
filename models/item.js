/* Create an ajax call for shop items to interact with database points for accounts
*/

var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item_name: String,
    points: Number,
    image: String
  });

module.exports = mongoose.model('Item', UserSchema);
