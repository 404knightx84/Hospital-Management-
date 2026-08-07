const DailyCheckup = require('../models/DailyCheckup.model');

// @desc    Create a new Daily Checkup
// @route   POST /api/checkups
exports.createDailyCheckup = async (req, res, next) => {
  try {
    const item = await DailyCheckup.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Daily Checkup records
// @route   GET /api/checkups
exports.getAllDailyCheckups = async (req, res, next) => {
  try {
    const items = await DailyCheckup.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Daily Checkup by ID
// @route   GET /api/checkups/:id
exports.getDailyCheckupById = async (req, res, next) => {
  try {
    const item = await DailyCheckup.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Daily Checkup not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Daily Checkup
// @route   PUT /api/checkups/:id
exports.updateDailyCheckup = async (req, res, next) => {
  try {
    const item = await DailyCheckup.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Daily Checkup not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Daily Checkup
// @route   DELETE /api/checkups/:id
exports.deleteDailyCheckup = async (req, res, next) => {
  try {
    const item = await DailyCheckup.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Daily Checkup not found' });
    res.status(200).json({ success: true, message: 'Daily Checkup deleted' });
  } catch (err) {
    next(err);
  }
};
