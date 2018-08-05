(function() {
	'use strict';

	angular
	.module('angularApp')
	.directive('saveButton', saveButton);

	function saveButton(){
		return{
			restrict: 'E',
			scope: {
				drDisabled: "=?",
				drPosition: "=?",
			},
			templateUrl: "src/directive/saveButton/template.html",
		}
	}
})();