const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
  number: Number,
  seats: Number,
  availability: Boolean,
});

module.exports = mongoose.model("Tables", tableSchema);
