const express = require("express");
const eventRoutes = express.Router();

eventRoutes.get("/", (req, res) => {
  console.log("Reservation route hit!");
});

module.exports = eventRoutes;
