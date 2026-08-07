const express = require('express');
const router = express.Router();
const {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} = require('../controllers/notification.controller');
const protect = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

router.post('/', protect, createNotification);
router.get('/', protect, getAllNotifications);
router.get('/:id', protect, getNotificationById);
router.put('/:id', protect, updateNotification);
router.delete('/:id', protect, authorize('admin', 'doctor'), deleteNotification);

module.exports = router;
