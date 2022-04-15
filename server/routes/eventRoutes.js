const express = require("express");
const eventRoutes = express.Router();

eventRoutes.get("/", (req, res) => {
  console.log("Events route hit!");
});

module.exports = eventRoutes;
