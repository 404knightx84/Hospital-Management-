const express = require('express');
const router = express.Router();
const {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} = require('../controllers/prescription.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createPrescription);
router.get('/', protect, getAllPrescriptions);
router.get('/:id', protect, getPrescriptionById);
router.put('/:id', protect, updatePrescription);
router.delete('/:id', protect, authorize('admin', 'doctor'), deletePrescription);

module.exports = router;
