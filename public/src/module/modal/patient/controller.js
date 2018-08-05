(function() {
	'use strict';

	angular
	.module('angularApp')
	.controller('patientModalController', patientModalController);

	patientModalController.$inject = ["$scope", "Patients"];

	function patientModalController($scope, Patients){
		let vm = this;

		vm.form = angular.copy($scope.ngDialogData);
		vm.save = save;

		function save(){
			let patient = new Patients.resource(vm.form);
			patient.$save().then(function(){
				$scope.confirm(patient);
			});
		}
	}

})();