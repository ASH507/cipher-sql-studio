const router = require("express").Router();
const pool = require("../config/postgres");
const validateQuery = require("../middleware/validateQuery");

router.post("/execute", validateQuery, async (req, res) => {
  try {
    const result = await pool.query(req.body.query);
    res.json(result.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;