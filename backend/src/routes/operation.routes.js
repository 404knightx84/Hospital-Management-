const express = require('express');
const router = express.Router();
const {
  createOperation,
  getAllOperations,
  getOperationById,
  updateOperation,
  deleteOperation,
} = require('../controllers/operation.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createOperation);
router.get('/', protect, getAllOperations);
router.get('/:id', protect, getOperationById);
router.put('/:id', protect, updateOperation);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteOperation);

module.exports = router;
