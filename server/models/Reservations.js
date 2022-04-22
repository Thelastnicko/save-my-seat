const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  date: Date,
  name: String,
  lastName: String,
  guests: Number,
  table: Number,
  time: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("Reservations", reservationSchema);
