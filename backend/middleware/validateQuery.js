module.exports = function (req, res, next) {
  const forbidden = ["drop", "delete", "alter", "truncate", "insert", "update"];
  const query = req.body.query.toLowerCase();

  for (let word of forbidden) {
    if (query.includes(word)) {
      return res.status(400).json({ error: "Dangerous query blocked" });
    }
  }
  next();
};