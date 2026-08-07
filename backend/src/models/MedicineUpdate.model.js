const mongoose = require('mongoose');

// Tracks ongoing dosage changes / refills for chronic patients
// without needing to rewrite the whole prescription each time
const medicineUpdateSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    prescription: { type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
    changeType: {
      type: String,
      enum: ['dosage_change', 'refill', 'stopped', 'added'],
      required: true,
    },
    previousDosage: { type: String },
    newDosage: { type: String },
    reason: { type: String },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MedicineUpdate', medicineUpdateSchema);
