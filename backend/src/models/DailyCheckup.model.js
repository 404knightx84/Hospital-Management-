const mongoose = require('mongoose');

// Routine vitals logging - for admitted / chronic-condition patients
const dailyCheckupSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // nurse/doctor
    date: { type: Date, default: Date.now },
    vitals: {
      bloodPressure: { type: String }, // e.g. "120/80"
      temperature: { type: Number }, // in Celsius
      pulseRate: { type: Number },
      respiratoryRate: { type: Number },
      oxygenSaturation: { type: Number },
      weight: { type: Number },
      bloodSugar: { type: Number }, // mg/dL
    },
    remarks: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('DailyCheckup', dailyCheckupSchema);
