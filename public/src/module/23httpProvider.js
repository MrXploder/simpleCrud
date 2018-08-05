(function() {
	'use strict';

	angular
	.module('angularApp')
	.config(httpProvider);

	httpProvider.$inject = ["$httpProvider"];

	function httpProvider($httpProvider){
		$httpProvider.interceptors.push('preventTemplateCache');
	}
})();