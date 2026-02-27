const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  question: String,
  relatedTables: [String],
});

module.exports = mongoose.model("Assignment", AssignmentSchema);