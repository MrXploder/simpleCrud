/*Input autocomplete only works for "full_name" property of the given object */
(function(){
	'use strict';
	 
	angular
	.module('angularApp')
	.controller('inputAutocompleteController', inputAutocompleteController);

	inputAutocompleteController.$inject = ["$scope"];

	function inputAutocompleteController($scope){
		let vm = this;

		vm.autocompleteRandomId = 'myId' + Math.random().toString(36).substr(2, 9);
		
		$scope.$watch('vm.data', function(){
			if(vm.data === undefined){
				return;
			}
			else{
				let autocompleteData = {};
				vm.data.forEach(function(item){
					autocompleteData[item.full_name] = null;
				});
				$('#'+vm.autocompleteRandomId).autocomplete({
					data: autocompleteData,
					limit: 5,
					minLength: 1,
				});
			}
		}, true);
	}
})();