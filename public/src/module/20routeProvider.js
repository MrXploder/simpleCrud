(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(routeProvider);

	routeProvider.$inject  = ["$routeProvider"];

	function routeProvider($routeProvider){
		$routeProvider
		.when("/home", {
			templateUrl: "src/module/route/home/template.html",
			controller: "homeController",
			controllerAs: "hmc",
		})
		.when("/managePatients",{
			controller: "managePatientsController",
			controllerAs: "mpc",
			templateUrl: "src/module/route/managePatients/template.html",
		})
		.otherwise({
			redirectTo: "/home",
		});
	};
})();