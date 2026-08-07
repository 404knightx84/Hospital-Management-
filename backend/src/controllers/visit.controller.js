const Visit = require('../models/Visit.model');

// @desc    Create a new Visit
// @route   POST /api/visits
exports.createVisit = async (req, res, next) => {
  try {
    const item = await Visit.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Visit records
// @route   GET /api/visits
exports.getAllVisits = async (req, res, next) => {
  try {
    const items = await Visit.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Visit by ID
// @route   GET /api/visits/:id
exports.getVisitById = async (req, res, next) => {
  try {
    const item = await Visit.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Visit not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Visit
// @route   PUT /api/visits/:id
exports.updateVisit = async (req, res, next) => {
  try {
    const item = await Visit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Visit not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Visit
// @route   DELETE /api/visits/:id
exports.deleteVisit = async (req, res, next) => {
  try {
    const item = await Visit.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Visit not found' });
    res.status(200).json({ success: true, message: 'Visit deleted' });
  } catch (err) {
    next(err);
  }
};
