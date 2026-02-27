const router = require("express").Router();

router.post("/", async (req, res) => {
  const { question, userQuery } = req.body;

  let hint = "Think about which table and condition is required.";

  if (question.toLowerCase().includes("users")) {
    hint = "Use SELECT * FROM users";
  } else if (question.toLowerCase().includes("price")) {
    hint = "Use WHERE price > value";
  } else if (question.toLowerCase().includes("join")) {
    hint = "Use JOIN between users, orders, and products tables";
  }

  res.json({ hint });
});

module.exports = router;