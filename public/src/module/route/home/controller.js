(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('homeController', homeController);

	homeController.$inject = ["$scope"];

	function homeController($scope){
		var hmc = this;

		activate();

		//////////////////////////////////////////

		function activate(){
		}
	}
})();