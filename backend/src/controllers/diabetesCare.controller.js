const DiabetesRecord = require('../models/DiabetesRecord.model');

// @desc    Create a new Diabetes Care
// @route   POST /api/diabetesCares
exports.createDiabetesRecord = async (req, res, next) => {
  try {
    const item = await DiabetesRecord.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Diabetes Care records
// @route   GET /api/diabetesCares
exports.getAllDiabetesRecords = async (req, res, next) => {
  try {
    const items = await DiabetesRecord.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Diabetes Care by ID
// @route   GET /api/diabetesCares/:id
exports.getDiabetesRecordById = async (req, res, next) => {
  try {
    const item = await DiabetesRecord.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Diabetes Care not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Diabetes Care
// @route   PUT /api/diabetesCares/:id
exports.updateDiabetesRecord = async (req, res, next) => {
  try {
    const item = await DiabetesRecord.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Diabetes Care not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Diabetes Care
// @route   DELETE /api/diabetesCares/:id
exports.deleteDiabetesRecord = async (req, res, next) => {
  try {
    const item = await DiabetesRecord.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Diabetes Care not found' });
    res.status(200).json({ success: true, message: 'Diabetes Care deleted' });
  } catch (err) {
    next(err);
  }
};
