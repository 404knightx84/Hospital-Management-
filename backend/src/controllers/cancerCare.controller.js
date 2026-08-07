const CancerCase = require('../models/CancerCase.model');

// @desc    Create a new Cancer Care
// @route   POST /api/cancerCares
exports.createCancerCase = async (req, res, next) => {
  try {
    const item = await CancerCase.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Cancer Care records
// @route   GET /api/cancerCares
exports.getAllCancerCases = async (req, res, next) => {
  try {
    const items = await CancerCase.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Cancer Care by ID
// @route   GET /api/cancerCares/:id
exports.getCancerCaseById = async (req, res, next) => {
  try {
    const item = await CancerCase.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Cancer Care not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Cancer Care
// @route   PUT /api/cancerCares/:id
exports.updateCancerCase = async (req, res, next) => {
  try {
    const item = await CancerCase.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Cancer Care not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Cancer Care
// @route   DELETE /api/cancerCares/:id
exports.deleteCancerCase = async (req, res, next) => {
  try {
    const item = await CancerCase.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Cancer Care not found' });
    res.status(200).json({ success: true, message: 'Cancer Care deleted' });
  } catch (err) {
    next(err);
  }
};
