

var AwardsModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/Awards/Modals/modifyAwardsModalTemplate.html',
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
	templateUrl: 'Features/Awards/Modals/modifyAwardsModalTemplate.html',
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

angular.module('app').factory('AwardsModalService', AwardsModalService);



