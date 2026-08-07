const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    visit: { type: mongoose.Schema.Types.ObjectId, ref: 'Visit' },
    medicines: [
      {
        medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
        dosage: { type: String }, // e.g. "500mg"
        frequency: { type: String }, // e.g. "twice a day"
        duration: { type: String }, // e.g. "7 days"
        instructions: { type: String }, // e.g. "after food"
      },
    ],
    issuedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Prescription', prescriptionSchema);
