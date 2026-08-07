const Medicine = require('../models/Medicine.model');

// @desc    Create a new Medicine
// @route   POST /api/medicines
exports.createMedicine = async (req, res, next) => {
  try {
    const item = await Medicine.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Medicine records
// @route   GET /api/medicines
exports.getAllMedicines = async (req, res, next) => {
  try {
    const items = await Medicine.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Medicine by ID
// @route   GET /api/medicines/:id
exports.getMedicineById = async (req, res, next) => {
  try {
    const item = await Medicine.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Medicine
// @route   PUT /api/medicines/:id
exports.updateMedicine = async (req, res, next) => {
  try {
    const item = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Medicine
// @route   DELETE /api/medicines/:id
exports.deleteMedicine = async (req, res, next) => {
  try {
    const item = await Medicine.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.status(200).json({ success: true, message: 'Medicine deleted' });
  } catch (err) {
    next(err);
  }
};
