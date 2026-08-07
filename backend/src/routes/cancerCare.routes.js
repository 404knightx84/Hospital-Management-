const express = require('express');
const router = express.Router();
const {
  createCancerCase,
  getAllCancerCases,
  getCancerCaseById,
  updateCancerCase,
  deleteCancerCase,
} = require('../controllers/cancerCare.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createCancerCase);
router.get('/', protect, getAllCancerCases);
router.get('/:id', protect, getCancerCaseById);
router.put('/:id', protect, updateCancerCase);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteCancerCase);

module.exports = router;
