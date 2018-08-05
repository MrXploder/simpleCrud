const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientsSchema = new Schema({
	rut           : String,
	full_name     : String,
	allergies     : String,
	phone_number  : Number,
	mobile_number : Number,
});

PatientsSchema.virtual('id').get(function(){
	return this._id.toHexString();
});

PatientsSchema.set('toJSON', {
	virtuals: true
});

PatientsSchema.set('toObject', {
  virtuals: true
});

module.exports = mongoose.model('PatientsModel', PatientsSchema);