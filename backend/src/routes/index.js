const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/patients', require('./patient.routes'));
router.use('/doctors', require('./doctor.routes'));
router.use('/appointments', require('./appointment.routes'));
router.use('/visits', require('./visit.routes'));
router.use('/checkups', require('./checkup.routes'));
router.use('/prescriptions', require('./prescription.routes'));
router.use('/medicines', require('./medicine.routes'));
router.use('/cancer-care', require('./cancerCare.routes'));
router.use('/diabetes-care', require('./diabetesCare.routes'));
router.use('/operations', require('./operation.routes'));
router.use('/recovery-logs', require('./recovery.routes'));
router.use('/notifications', require('./notification.routes'));

module.exports = router;
