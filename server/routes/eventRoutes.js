const express = require("express");
const eventRoutes = express.Router();
const Event = require("../models/Events");

eventRoutes.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
eventRoutes.get("/:id", async (req, res) => {
  try {
    const eventById = await Event.findById(req.params.id);
    res.json(eventById);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
eventRoutes.post("/", (req, res) => {
  const event = new Event({
    name: req.body.name,
    lastName: req.body.lastName,
    theme: req.body.theme,
    guests: req.body.guests,
    time: req.body.time,
    phone: req.body.phone,
    email: req.body.email,
  });
  event
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});
eventRoutes.put("/:id", async (req, res) => {
  try {
    const updateEvent = await Event.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updateEvent);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
eventRoutes.delete("/:id", async (req, res) => {
  try {
    const removeEvent = await Event.remove({ _id: req.params.id });
    res.json(removeEvent);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = eventRoutes;
