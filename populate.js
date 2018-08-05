//////////////////////////////////////////////////
const mongoose = require('mongoose');

/////////////////////////////////////////////////

mongoose.connect('mongodb://localhost/simpleCrud');
mongoose.Promise = global.Promise;

////////////////////////////////////////////////

let PatientsModel = require('./model/Patients');

////////////////////////////////////////////////

var patient = new PatientsModel({
	rut: "17.808.998-6",
	full_name: "Luis Arancibia",
	allergies: true,
	phone_number: "56232941275",
	mobile_number: "56957139808"
});

patient.save(err => {
	console.log('success');
});

///////////////////////////////////////////////