const express = require('express');
const router = express.Router();
const {
  createRecoveryLog,
  getAllRecoveryLogs,
  getRecoveryLogById,
  updateRecoveryLog,
  deleteRecoveryLog,
} = require('../controllers/recovery.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createRecoveryLog);
router.get('/', protect, getAllRecoveryLogs);
router.get('/:id', protect, getRecoveryLogById);
router.put('/:id', protect, updateRecoveryLog);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteRecoveryLog);

module.exports = router;
