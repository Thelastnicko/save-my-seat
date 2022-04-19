const express = require("express");
const tableRoutes = express.Router();

tableRoutes.get("/", (req, res) => {
  console.log("Tables get route hit!");
});
tableRoutes.get("/:id", (req, res) => {
  console.log("Tables get route hit!");
});
tableRoutes.post("/", (req, res) => {
  console.log("Tables post route hit!");
});
tableRoutes.put("/:id", (req, res) => {
  console.log("Tables put route hit!");
});
tableRoutes.delete("/:id", (req, res) => {
  console.log("Tables delete route hit!");
});

module.exports = tableRoutes;
