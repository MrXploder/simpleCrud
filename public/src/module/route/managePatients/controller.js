(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('managePatientsController', managePatientsController);

	managePatientsController.$inject = ["Patients", "$scope", "ngDialog"];

	function managePatientsController(Patients, $scope, ngDialog){
		let mpc = this;

		mpc.patients 		 = [];
		mpc.sortBy 		 	 = 'id';
		mpc.searchTerm   = "";
		mpc.sortReverse  = false;
		mpc.itemsPerPage = 10;
		mpc.isAdding     = false;
		mpc.add     		 = add;
		mpc.details			 = details;
		mpc.remove 			 = remove;

		activate();
		///////////////////////////////////////////////////////////

		function activate(){
			Patients.find({}).then(function(patients){
				mpc.patients = patients;
			})
		}

		function add(){
			mpc.isAdding = true;
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/patient/template.html",
				controller: "patientModalController",
				controllerAs: "vm",
				showClose: true,
			})
			.then(function(response){
				Materialize.toast("Exito", 5000, "green");
				activate();
			})
			.finally(function(){
				mpc.isAdding = false;
			})
		}

		function details(patient){
			ngDialog.openConfirm({
				templateUrl: "src/module/modal/patient/template.html",
				controller: "patientModalController",
				controllerAs: "vm",
				showClose: true,
				data: patient,
			}).then(activate);
		}

		function remove(patient){
			patient.$remove().then(function(response){
				activate();
				Materialize.toast("Erased", 5000, "red");
			});
		}
	}
})();