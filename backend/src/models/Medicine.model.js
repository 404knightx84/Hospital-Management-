const mongoose = require('mongoose');

// Medicine catalog / inventory
const medicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genericName: { type: String },
    category: { type: String }, // e.g. chemotherapy, insulin, painkiller
    dosageForm: { type: String }, // tablet, injection, syrup
    stockQuantity: { type: Number, default: 0 },
    unitPrice: { type: Number },
    manufacturer: { type: String },
    expiryDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Medicine', medicineSchema);
