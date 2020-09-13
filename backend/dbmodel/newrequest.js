const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NewRequest = new Schema({
  name: {
    type: String,
    required: true
  },
  hostname: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  location :{
    type: String,
    default: true
  }
});

module.exports = User = mongoose.model("requests", NewRequest);