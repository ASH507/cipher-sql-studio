const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const connectMongo = require("./config/mongo");
require("./config/postgres");

const assignmentRoutes = require("./routes/assignment.routes");
const queryRoutes = require("./routes/query.routes");
const hintRoutes = require("./routes/hint.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectMongo();

app.use("/api/assignments", assignmentRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});