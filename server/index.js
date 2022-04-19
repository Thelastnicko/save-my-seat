const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors({ origin: "*" }));
app.use(express.json());

const eRoutes = require("./routes/eventRoutes");
const rRoutes = require("./routes/reservationRoutes");
const tRoutes = require("./routes/tableRoutes");
app.use("/events", eRoutes);
app.use("/reservations", rRoutes);
app.use("/tables", tRoutes);

mongoose.connect("mongodb://localhost/savemyseatdb");
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
