const mongoose = require('mongoose');

// Blood sugar logs and long term trend tracking (HbA1c) for diabetic patients
const diabetesRecordSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    diabetesType: { type: String, enum: ['type1', 'type2', 'gestational'] },
    sugarLogs: [
      {
        date: { type: Date, default: Date.now },
        fastingLevel: { type: Number }, // mg/dL
        postMealLevel: { type: Number },
        insulinDose: { type: String },
        notes: { type: String },
      },
    ],
    hba1cHistory: [
      {
        date: { type: Date },
        value: { type: Number }, // percentage
      },
    ],
    dietPlan: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('DiabetesRecord', diabetesRecordSchema);
