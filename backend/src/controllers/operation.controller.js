const Operation = require('../models/Operation.model');

// @desc    Create a new Operation
// @route   POST /api/operations
exports.createOperation = async (req, res, next) => {
  try {
    const item = await Operation.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Operation records
// @route   GET /api/operations
exports.getAllOperations = async (req, res, next) => {
  try {
    const items = await Operation.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Operation by ID
// @route   GET /api/operations/:id
exports.getOperationById = async (req, res, next) => {
  try {
    const item = await Operation.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Operation not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Operation
// @route   PUT /api/operations/:id
exports.updateOperation = async (req, res, next) => {
  try {
    const item = await Operation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Operation not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Operation
// @route   DELETE /api/operations/:id
exports.deleteOperation = async (req, res, next) => {
  try {
    const item = await Operation.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Operation not found' });
    res.status(200).json({ success: true, message: 'Operation deleted' });
  } catch (err) {
    next(err);
  }
};
