(function() {
	'use strict';

	angular
	.module('angularApp')
	.config(dialogProvider);

	dialogProvider.$inject = ["ngDialogProvider"];

	function dialogProvider(ngDialogProvider){
		ngDialogProvider.setDefaults({
			className: 'ngdialog-theme-default',
			showClose: false,
			closeByDocument: false,
			closeByEscape: false,
			width: "60%",
		});
	}
})();
