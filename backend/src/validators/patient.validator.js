const { body } = require('express-validator');

exports.patientValidationRules = [
  body('dateOfBirth').optional().isISO8601(),
  body('gender').optional().isIn(['male', 'female', 'other']),
];
