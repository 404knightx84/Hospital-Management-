const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    leadSurgeon: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    assistingStaff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    operationName: { type: String, required: true },
    operationType: { type: String }, // elective, emergency
    scheduledDate: { type: Date },
    actualDate: { type: Date },
    durationMinutes: { type: Number },
    anesthesiaType: { type: String },
    preOpNotes: { type: String },
    postOpNotes: { type: String },
    status: {
      type: String,
      enum: ['scheduled', 'in_progress', 'completed', 'cancelled'],
      default: 'scheduled',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Operation', operationSchema);
