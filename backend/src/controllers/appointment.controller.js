const Appointment = require('../models/Appointment.model');

// @desc    Create a new Appointment
// @route   POST /api/appointments
exports.createAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all Appointment records
// @route   GET /api/appointments
exports.getAllAppointments = async (req, res, next) => {
  try {
    const items = await Appointment.find();
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single Appointment by ID
// @route   GET /api/appointments/:id
exports.getAppointmentById = async (req, res, next) => {
  try {
    const item = await Appointment.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Appointment
// @route   PUT /api/appointments/:id
exports.updateAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Appointment
// @route   DELETE /api/appointments/:id
exports.deleteAppointment = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.status(200).json({ success: true, message: 'Appointment deleted' });
  } catch (err) {
    next(err);
  }
};
