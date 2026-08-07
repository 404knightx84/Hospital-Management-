const { body } = require('express-validator');

exports.medicineValidationRules = [
  body('name').notEmpty().withMessage('Medicine name is required'),
  body('stockQuantity').optional().isNumeric(),
];
