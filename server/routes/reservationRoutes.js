const express = require("express");
const uuid = require("uuidv4");
const reservationRoutes = express.Router();

reservationRoutes.get("/", (req, res) => {
  console.log("Reservations hit!");
});

module.exports = reservationRoutes;
