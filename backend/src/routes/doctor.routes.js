const express = require('express');
const router = express.Router();
const {
  createDoctorProfile,
  getAllDoctors,
  getDoctorById,
  updateDoctorProfile,
  getAvailableSlots,
} = require('../controllers/doctor.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, authorize('admin'), createDoctorProfile);
router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', protect, authorize('admin', 'doctor'), updateDoctorProfile);
router.get('/:id/available-slots', getAvailableSlots);

module.exports = router;
