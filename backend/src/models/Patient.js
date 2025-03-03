const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: {type: String, required: true},
  age: { type: Number, required: true },
  doB: { type: Date, required: true },
  gender: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  homeTown: {type: String, required: true},

  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, 
{ timestamps: true });
  

module.exports = mongoose.model('Patient', patientSchema);
