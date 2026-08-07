const Prescription = require('../models/Prescription.model');

// @desc    Create a new Prescription
// @route   POST /api/prescriptions
exports.createPrescription = async (req, res, next) => {
  try {
    const item = await Prescription.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Prescription records
// @route   GET /api/prescriptions
exports.getAllPrescriptions = async (req, res, next) => {
  try {
    const items = await Prescription.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Prescription by ID
// @route   GET /api/prescriptions/:id
exports.getPrescriptionById = async (req, res, next) => {
  try {
    const item = await Prescription.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Prescription not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Prescription
// @route   PUT /api/prescriptions/:id
exports.updatePrescription = async (req, res, next) => {
  try {
    const item = await Prescription.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Prescription not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Prescription
// @route   DELETE /api/prescriptions/:id
exports.deletePrescription = async (req, res, next) => {
  try {
    const item = await Prescription.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Prescription not found' });
    res.status(200).json({ success: true, message: 'Prescription deleted' });
  } catch (err) {
    next(err);
  }
};
