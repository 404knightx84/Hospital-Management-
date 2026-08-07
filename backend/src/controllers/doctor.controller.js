const Doctor = require('../models/Doctor.model');

exports.createDoctorProfile = async (req, res, next) => {
  try {
    const doctor = await Doctor.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, data: doctor });
  } catch (err) {
    next(err);
  }
};

exports.getAllDoctors = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.specialization) filter.specialization = req.query.specialization;
    const doctors = await Doctor.find(filter).populate('user', 'name email phone');
    res.status(200).json({ success: true, count: doctors.length, data: doctors });
  } catch (err) {
    next(err);
  }
};

exports.getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user', 'name email phone');
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.status(200).json({ success: true, data: doctor });
  } catch (err) {
    next(err);
  }
};

exports.updateDoctorProfile = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.status(200).json({ success: true, data: doctor });
  } catch (err) {
    next(err);
  }
};

// @desc    Get available time slots for a doctor on a given date
exports.getAvailableSlots = async (req, res, next) => {
  try {
    const Appointment = require('../models/Appointment.model');
    const { date } = req.query;

    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });

    const bookedAppointments = await Appointment.find({
      doctor: req.params.id,
      date,
      status: { $ne: 'cancelled' },
    }).select('timeSlot');

    const bookedSlots = bookedAppointments.map((a) => a.timeSlot);

    res.status(200).json({
      success: true,
      availability: doctor.availability,
      bookedSlots,
    });
  } catch (err) {
    next(err);
  }
};
