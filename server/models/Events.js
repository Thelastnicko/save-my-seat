const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  lastName: String,
  theme: String,
  date: Date,
  guests: Number,
  time: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("Events", eventSchema);
