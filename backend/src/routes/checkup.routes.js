const express = require('express');
const router = express.Router();
const {
  createDailyCheckup,
  getAllDailyCheckups,
  getDailyCheckupById,
  updateDailyCheckup,
  deleteDailyCheckup,
} = require('../controllers/checkup.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createDailyCheckup);
router.get('/', protect, getAllDailyCheckups);
router.get('/:id', protect, getDailyCheckupById);
router.put('/:id', protect, updateDailyCheckup);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteDailyCheckup);

module.exports = router;
