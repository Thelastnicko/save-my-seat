const express = require("express");
const uuid = require("uuidv4");
const reservationRoutes = express.Router();

reservationRoutes.get("/", (req, res) => {
  console.log("Reservations get route hit!");
});
reservationRoutes.get("/:id", (req, res) => {
  console.log("Reservations hit!");
});
reservationRoutes.post("/", (req, res) => {
  console.log("Reservations hit!");
});
reservationRoutes.put("/:id", (req, res) => {
  console.log("Reservations hit!");
});
reservationRoutes.delete("/:id", (req, res) => {
  console.log("Reservations hit!");
});

module.exports = reservationRoutes;
