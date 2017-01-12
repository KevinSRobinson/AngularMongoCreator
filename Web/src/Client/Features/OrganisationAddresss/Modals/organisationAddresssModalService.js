		
var organisationAddresssModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'Features/OrganisationAddresss/Modals/modifyOrganisationAddressModalControllerTemplate.html',
	controller: 'modifyOrganisationAddressModalController',
	controllerAs: 'vm',
	resolve: {
	organisationAddress: function () {
		return null;
	}
	}
});
};
	

var modify = function(organisationAddress) {
return  $uibModal.open({
	templateUrl: 'Features/OrganisationAddresss/Modals/modifyOrganisationAddressModalControllerTemplate.html',
	controller: 'modifyOrganisationAddressModalController',
	controllerAs: 'vm',
	resolve: {
	organisationAddress: function () {
		return organisationAddress;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}
angular.module('app').factory('organisationAddresssModalService', organisationAddresssModalService);

