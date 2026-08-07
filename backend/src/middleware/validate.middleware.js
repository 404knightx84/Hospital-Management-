const { validationResult } = require('express-validator');

// Runs after express-validator checks; returns 400 with error list if any failed
module.exports = function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};
