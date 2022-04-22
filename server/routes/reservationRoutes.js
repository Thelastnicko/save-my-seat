const express = require("express");
const reservationRoutes = express.Router();
const Reservation = require("../models/Reservations");

reservationRoutes.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
reservationRoutes.get("/:id", async (req, res) => {
  try {
    const reservationById = await Reservation.findById(req.params.id);
    res.json(reservationById);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
reservationRoutes.post("/", (req, res) => {
  const reservation = new Reservation({
    date: req.body.date,
    name: req.body.name,
    lastName: req.body.lastName,
    guests: req.body.guests,
    table: req.body.table,
    time: req.body.time,
    phone: req.body.phone,
    email: req.body.email,
  });
  reservation
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
reservationRoutes.put("/:id", (req, res) => {
  console.log("Reservations hit!");
});
reservationRoutes.delete("/:id", (req, res) => {
  console.log("Reservations hit!");
});

module.exports = reservationRoutes;
