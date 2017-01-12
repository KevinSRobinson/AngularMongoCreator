		
var awardssModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/Awardss/Modals/modifyAwardsModalControllerTemplate.html',
	controller: 'modifyAwardsModalController',
	controllerAs: 'vm',
	resolve: {
	awards: function () {
		return null;
	}
	}
});
};
	

var modify = function(awards) {
return  $uibModal.open({
	templateUrl: 'Features/Awardss/Modals/modifyAwardsModalControllerTemplate.html',
	controller: 'modifyAwardsModalController',
	controllerAs: 'vm',
	resolve: {
	awards: function () {
		return awards;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}
angular.module('app').factory('awardssModalService', awardssModalService);

