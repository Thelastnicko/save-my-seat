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
reservationRoutes.put("/:id", async (req, res) => {
  try {
    const updateReservation = await Reservation.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updateReservation);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
reservationRoutes.delete("/:id", async (req, res) => {
  try {
    const removeReservation = await Reservation.remove({ _id: req.params.id });
    res.json(removeReservation);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = reservationRoutes;
