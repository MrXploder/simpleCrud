const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientsSchema = new Schema({
	rut           : String,
	full_name     : String,
	allergies     : Boolean,
	phone_number  : Number,
	mobile_number : Number,
});

module.exports = mongoose.model('PatientsModel', PatientsSchema);