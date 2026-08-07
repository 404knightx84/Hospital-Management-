const express = require('express');
const router = express.Router();
const {
  createPatientProfile,
  getAllPatients,
  getPatientById,
  updatePatientProfile,
  getPatientMedicalHistory,
} = require('../controllers/patient.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createPatientProfile);
router.get('/', protect, authorize('admin', 'doctor', 'nurse'), getAllPatients);
router.get('/:id', protect, getPatientById);
router.put('/:id', protect, updatePatientProfile);
router.get('/:id/history', protect, getPatientMedicalHistory);

module.exports = router;
