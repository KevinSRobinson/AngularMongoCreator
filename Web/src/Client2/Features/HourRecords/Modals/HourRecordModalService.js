

var HourRecordModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/HourRecords/Modals/modifyHourRecordModalTemplate.html',
	controller: 'modifyHourRecordModalController',
	controllerAs: 'vm',
	resolve: {
	hourRecord: function () {
		return null;
	}
	}
});
};
	

var modify = function(hourRecord) {
return  $uibModal.open({
	templateUrl: 'Features/HourRecords/Modals/modifyHourRecordModalTemplate.html',
	controller: 'modifyHourRecordModalController',
	controllerAs: 'vm',
	resolve: {
	hourRecord: function () {
		return hourRecord;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}

angular.module('app').factory('HourRecordModalService', HourRecordModalService);



