const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    qualifications: [{ type: String }],
    experienceYears: { type: Number },
    availability: [
      {
        day: { type: String }, // Monday, Tuesday...
        startTime: { type: String },
        endTime: { type: String },
      },
    ],
    consultationFee: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
