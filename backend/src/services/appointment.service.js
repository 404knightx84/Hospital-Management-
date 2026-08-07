const Appointment = require('../models/Appointment.model');

// Checks whether a given doctor + date + timeSlot is already booked
async function isSlotAvailable(doctorId, date, timeSlot) {
  const existing = await Appointment.findOne({
    doctor: doctorId,
    date,
    timeSlot,
    status: { $ne: 'cancelled' },
  });
  return !existing;
}

module.exports = { isSlotAvailable };
