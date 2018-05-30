var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  });

module.exports = mongoose.model('Item', UserSchema);
