const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  user_name: {
    type: String,
  },
  task: {
    type: String,
  },
  category:{
      type:String,
  },
  done: {
    type: Boolean,
  }
},{ timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
