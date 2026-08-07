const mongoose = require('mongoose');

// Post-operation recovery milestone tracking
const recoveryLogSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    operation: { type: mongoose.Schema.Types.ObjectId, ref: 'Operation', required: true },
    date: { type: Date, default: Date.now },
    day: { type: Number }, // day count since operation, e.g. Day 1, Day 2
    painLevel: { type: Number, min: 0, max: 10 },
    mobilityStatus: { type: String }, // bedridden, assisted walking, independent
    woundStatus: { type: String }, // healing, infected, healed
    medicationGiven: [{ type: String }],
    complications: { type: String },
    nextFollowUp: { type: Date },
    recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('RecoveryLog', recoveryLogSchema);
