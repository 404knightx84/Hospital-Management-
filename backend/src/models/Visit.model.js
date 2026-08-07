const mongoose = require('mongoose');

// Records an actual OPD / walk-in / follow-up visit event
const visitSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    visitDate: { type: Date, default: Date.now },
    visitType: {
      type: String,
      enum: ['opd', 'walk_in', 'follow_up', 'emergency'],
      default: 'opd',
    },
    symptoms: { type: String },
    diagnosis: { type: String },
    prescriptionIssued: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Visit', visitSchema);
