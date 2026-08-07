const mongoose = require('mongoose');

// Tracks cancer patient's staging, chemo cycles and reports
const cancerCaseSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    oncologist: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    cancerType: { type: String, required: true }, // e.g. "breast", "lung"
    stage: { type: String }, // e.g. "Stage II"
    diagnosisDate: { type: Date },
    treatmentPlan: { type: String }, // chemo, radiation, surgery, combination
    chemoCycles: [
      {
        cycleNumber: { type: Number },
        date: { type: Date },
        drugsUsed: [{ type: String }],
        sideEffects: { type: String },
        nextCycleDate: { type: Date },
      },
    ],
    reports: [
      {
        reportType: { type: String }, // biopsy, CT scan, blood work
        fileUrl: { type: String },
        date: { type: Date },
      },
    ],
    status: {
      type: String,
      enum: ['active_treatment', 'remission', 'palliative', 'completed'],
      default: 'active_treatment',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CancerCase', cancerCaseSchema);
