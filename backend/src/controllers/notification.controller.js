const Notification = require('../models/Notification.model');

// @desc    Create a new Notification
// @route   POST /api/notifications
exports.createNotification = async (req, res, next) => {
  try {
    const item = await Notification.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Notification records
// @route   GET /api/notifications
exports.getAllNotifications = async (req, res, next) => {
  try {
    const items = await Notification.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Notification by ID
// @route   GET /api/notifications/:id
exports.getNotificationById = async (req, res, next) => {
  try {
    const item = await Notification.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Notification not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Notification
// @route   PUT /api/notifications/:id
exports.updateNotification = async (req, res, next) => {
  try {
    const item = await Notification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Notification not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Notification
// @route   DELETE /api/notifications/:id
exports.deleteNotification = async (req, res, next) => {
  try {
    const item = await Notification.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Notification not found' });
    res.status(200).json({ success: true, message: 'Notification deleted' });
  } catch (err) {
    next(err);
  }
};
