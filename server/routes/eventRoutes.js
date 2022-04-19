const express = require("express");
const eventRoutes = express.Router();

eventRoutes.get("/", (req, res) => {
  console.log("Events get route hit!");
});
eventRoutes.get("/:id", (req, res) => {
  console.log("Events get route hit!");
});
eventRoutes.post("/", (req, res) => {
  console.log("Events post route hit!");
});
eventRoutes.put("/:id", (req, res) => {
  console.log("Events put route hit!");
});
eventRoutes.delete("/:id", (req, res) => {
  console.log("Events delete route hit!");
});

module.exports = eventRoutes;
