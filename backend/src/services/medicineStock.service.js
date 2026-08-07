const Medicine = require('../models/Medicine.model');

// Decrements stock when a prescription is issued/dispensed
async function deductStock(medicineId, quantity) {
  const medicine = await Medicine.findById(medicineId);
  if (!medicine) throw new Error('Medicine not found');
  if (medicine.stockQuantity < quantity) throw new Error('Insufficient stock');

  medicine.stockQuantity -= quantity;
  await medicine.save();
  return medicine;
}

module.exports = { deductStock };
