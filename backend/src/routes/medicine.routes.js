const express = require('express');
const router = express.Router();
const {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} = require('../controllers/medicine.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createMedicine);
router.get('/', protect, getAllMedicines);
router.get('/:id', protect, getMedicineById);
router.put('/:id', protect, updateMedicine);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteMedicine);

module.exports = router;
