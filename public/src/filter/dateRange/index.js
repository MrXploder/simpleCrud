(function(){
	'use strict';

	angular
	.module('angularApp')
	.filter('dateRange', dateRange);

	function dateRange(){
		return function(items, fromDate, toDate){
			/*input dates has no time, so when you cast a moment object you have to give as params only the date*/
			let filtered 	= [];
			let from_date = fromDate ? moment(fromDate, "DD/MM/YYYY") : moment(moment().format("DD/MM/YYYY").toString(), "DD/MM/YYYY");
			let to_date   = toDate   ? moment(toDate, "DD/MM/YYYY")   : from_date.clone();

			angular.forEach(items, function(item){
				let item_date = moment(item.date, "DD/MM/YYYY");
				if(from_date <= item_date && item_date <= to_date){
					filtered.push(item);
				}
			});
			return filtered;
		}
	}
})();
