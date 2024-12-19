const Patient = require('../models/Patient'); // Ensure this is correct

// GET all patients
const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET a patient by ID
const getPatientById = async (req, res) => {
  try {
      const patient = await Patient.findById(req.params.id);

      if (!patient) {
          return res.status(404).json({ error: 'Patient not found' });
      }

      res.json(patient);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// POST add new patient
const addPatient = async (req, res) => {
    try {
        const { name, age, doB, gender, bloodGroup, contactNumber   } = req.body;

        if (!name || !age) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const patient = new Patient({ name, age, doB, gender, bloodGroup, contactNumber });
        console.log(patient)
        await patient.save();

        res.status(201).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT update a patient
const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedPatient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        res.json(updatedPatient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE a patient
const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

        if (!deletedPatient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        res.json({ message: 'Patient deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getPatients, addPatient, updatePatient, deletePatient, getPatientById };
