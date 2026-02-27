const router = require("express").Router();
const Assignment = require("../models/Assignment");

router.get("/", async (req, res) => {
  const data = await Assignment.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await Assignment.findById(req.params.id);
  res.json(data);
});

module.exports = router;