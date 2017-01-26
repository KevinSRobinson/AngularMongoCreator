

var OrganisationModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/Organisations/Modals/modifyOrganisationModalTemplate.html',
	controller: 'modifyOrganisationModalController',
	controllerAs: 'vm',
	resolve: {
	organisation: function () {
		return null;
	}
	}
});
};
	

var modify = function(organisation) {
return  $uibModal.open({
	templateUrl: 'Features/Organisations/Modals/modifyOrganisationModalTemplate.html',
	controller: 'modifyOrganisationModalController',
	controllerAs: 'vm',
	resolve: {
	organisation: function () {
		return organisation;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}

angular.module('app').factory('OrganisationModalService', OrganisationModalService);



