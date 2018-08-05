(function() {
	'use strict';

	angular
	.module('angularApp')
	.directive('deleteButton', deleteButton);

	function deleteButton(){
		return{
			restrict: 'E',
			scope: {
				drDisabled: "=?",
				drPosition: "=?",
			},
			templateUrl: 'src/directive/deleteButton/template.html',
		}
	}
})();