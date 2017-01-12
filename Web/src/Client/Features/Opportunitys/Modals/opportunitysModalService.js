		
var opportunitysModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/Opportunitys/Modals/modifyOpportunityModalControllerTemplate.html',
	controller: 'modifyOpportunityModalController',
	controllerAs: 'vm',
	resolve: {
	opportunity: function () {
		return null;
	}
	}
});
};
	

var modify = function(opportunity) {
return  $uibModal.open({
	templateUrl: 'Features/Opportunitys/Modals/modifyOpportunityModalControllerTemplate.html',
	controller: 'modifyOpportunityModalController',
	controllerAs: 'vm',
	resolve: {
	opportunity: function () {
		return opportunity;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}
angular.module('app').factory('opportunitysModalService', opportunitysModalService);

