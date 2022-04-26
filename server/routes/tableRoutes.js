const express = require("express");
const tableRoutes = express.Router();

const Table = require("../models/Tables");

tableRoutes.get("/", async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
tableRoutes.get("/:id", async (req, res) => {
  try {
    const tableById = await Table.findById(req.params.id);
    res.json(tableById);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
tableRoutes.post("/", (req, res) => {
  const table = new Table({
    number: req.body.lastName,
    seats: req.body.seats,
    availability: req.body.availability,
  });
  table
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});
tableRoutes.put("/:id", async (req, res) => {
  try {
    const updateTable = await Table.updateOne(
      { _id: req.params.id },
      { $set: { availability: req.body.availability } }
    );
    res.json(updateTable);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
tableRoutes.delete("/:id", async (req, res) => {
  try {
    const removeTable = await Table.remove({ _id: req.params.id });
    res.json(removeTable);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = tableRoutes;
