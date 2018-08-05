(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Patients', patients);

	patients.$inject = ['$resource'];

	function patients($resource){
		const Resource = $resource("/patients/:id",{
			id: "@_id",
		},{
			create: {method: "POST"},
			read: {method: "GET"},
			update: {method: "PUT"},
			delete: {method: "DELETE"},
		});

		function _find(_q){
			return Resource.query(_q).$promise;
		}

		Resource.prototype.$save = function(){
			if(this._id){
				return this.$update();
			}
			else{
				return this.$create();
			}
		}

		return {
			find: _find,
			resource: Resource,
		}
	};
})();