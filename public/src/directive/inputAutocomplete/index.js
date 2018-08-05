(function(){
	'use strict';
	angular
		.module('angularApp')
		.directive('inputAutocomplete', inputAutocomplete);

	//inputAutocomplete.$inject = [""];

	function inputAutocomplete(){
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			controller: 'inputAutocompleteController',
			controllerAs: 'vm',
			bindToController: {
				bind: "=",
				data: "=",
				classId: "=",
			},
			template: '<input type="text" ng-model="vm.bind" id="{{vm.autocompleteRandomId}}" ng-class="{invalid: vm.classId <= 0, valid: vm.classId > 0}" class="autocomplete" required>',
		}
	}
})();