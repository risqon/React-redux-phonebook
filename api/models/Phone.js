const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number
  });

  module.exports =mongoose.model('Phone', phoneSchema);