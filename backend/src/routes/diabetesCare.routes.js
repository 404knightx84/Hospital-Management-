const express = require('express');
const router = express.Router();
const {
  createDiabetesRecord,
  getAllDiabetesRecords,
  getDiabetesRecordById,
  updateDiabetesRecord,
  deleteDiabetesRecord,
} = require('../controllers/diabetesCare.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createDiabetesRecord);
router.get('/', protect, getAllDiabetesRecords);
router.get('/:id', protect, getDiabetesRecordById);
router.put('/:id', protect, updateDiabetesRecord);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteDiabetesRecord);

module.exports = router;
