(function() {
	'use strict';

	angular
	.module('angularApp')
	.filter('toString', toString);

	function toString(){
		return function(item){
			return item.toString();
		}
	}
})();