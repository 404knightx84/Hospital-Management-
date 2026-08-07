const express = require('express');
const router = express.Router();
const {
  createVisit,
  getAllVisits,
  getVisitById,
  updateVisit,
  deleteVisit,
} = require('../controllers/visit.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createVisit);
router.get('/', protect, getAllVisits);
router.get('/:id', protect, getVisitById);
router.put('/:id', protect, updateVisit);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteVisit);

module.exports = router;
