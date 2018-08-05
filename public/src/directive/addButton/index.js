(function() {
	'use strict';

	angular
	.module('angularApp')
	.directive('addButton', addButton);

	function addButton(){
		return{
			restrict: 'E',
			scope: {
				drDisabled: "=?",
				drPosition: "=?",
			},
			templateUrl: "src/directive/addButton/template.html",
		}
	}
})();