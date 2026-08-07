const RecoveryLog = require('../models/RecoveryLog.model');

// @desc    Create a new Recovery Log
// @route   POST /api/recoverys
exports.createRecoveryLog = async (req, res, next) => {
  try {
    const item = await RecoveryLog.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Recovery Log records
// @route   GET /api/recoverys
exports.getAllRecoveryLogs = async (req, res, next) => {
  try {
    const items = await RecoveryLog.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Recovery Log by ID
// @route   GET /api/recoverys/:id
exports.getRecoveryLogById = async (req, res, next) => {
  try {
    const item = await RecoveryLog.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Recovery Log not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Recovery Log
// @route   PUT /api/recoverys/:id
exports.updateRecoveryLog = async (req, res, next) => {
  try {
    const item = await RecoveryLog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Recovery Log not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Recovery Log
// @route   DELETE /api/recoverys/:id
exports.deleteRecoveryLog = async (req, res, next) => {
  try {
    const item = await RecoveryLog.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Recovery Log not found' });
    res.status(200).json({ success: true, message: 'Recovery Log deleted' });
  } catch (err) {
    next(err);
  }
};
