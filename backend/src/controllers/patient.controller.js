const Patient = require('../models/Patient.model');

exports.createPatientProfile = async (req, res, next) => {
  try {
    const patient = await Patient.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, data: patient });
  } catch (err) {
    next(err);
  }
};

exports.getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find().populate('user', 'name email phone');
    res.status(200).json({ success: true, count: patients.length, data: patients });
  } catch (err) {
    next(err);
  }
};

exports.getPatientById = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('user', 'name email phone');
    if (!patient) return res.status(404).json({ success: false, message: 'Patient not found' });
    res.status(200).json({ success: true, data: patient });
  } catch (err) {
    next(err);
  }
};

exports.updatePatientProfile = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) return res.status(404).json({ success: false, message: 'Patient not found' });
    res.status(200).json({ success: true, data: patient });
  } catch (err) {
    next(err);
  }
};

// Full medical timeline: visits, checkups, prescriptions, cancer/diabetes/recovery records
exports.getPatientMedicalHistory = async (req, res, next) => {
  try {
    const Visit = require('../models/Visit.model');
    const DailyCheckup = require('../models/DailyCheckup.model');
    const Prescription = require('../models/Prescription.model');
    const CancerCase = require('../models/CancerCase.model');
    const DiabetesRecord = require('../models/DiabetesRecord.model');
    const RecoveryLog = require('../models/RecoveryLog.model');

    const patientId = req.params.id;
    const [visits, checkups, prescriptions, cancerCases, diabetesRecords, recoveryLogs] =
      await Promise.all([
        Visit.find({ patient: patientId }).sort('-visitDate'),
        DailyCheckup.find({ patient: patientId }).sort('-date'),
        Prescription.find({ patient: patientId }).sort('-issuedDate'),
        CancerCase.find({ patient: patientId }),
        DiabetesRecord.find({ patient: patientId }),
        RecoveryLog.find({ patient: patientId }).sort('-date'),
      ]);

    res.status(200).json({
      success: true,
      data: { visits, checkups, prescriptions, cancerCases, diabetesRecords, recoveryLogs },
    });
  } catch (err) {
    next(err);
  }
};
