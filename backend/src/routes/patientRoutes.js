const express = require('express');
const Patient = require('../models/Patient'); // Correct path to your Patient model
const { getPatients, addPatient, updatePatient, deletePatient,getPatientById } = require('../controllers/patientController');
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Public Routes
router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/', addPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

// Authenticated Route
router.get('/my-patients', authMiddleware, async (req, res) => {
    try {
        const patients = await Patient.find({ createdBy: req.user.id });
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Export the router
module.exports = router;
