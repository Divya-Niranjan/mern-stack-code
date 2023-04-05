let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String
  },
  created:{
    type: Date,
  }
});

module.exports = mongoose.model('Todo', todoSchema);
