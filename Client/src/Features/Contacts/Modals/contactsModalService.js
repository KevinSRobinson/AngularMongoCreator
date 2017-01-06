		
var contactsModalService  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: 'modifyContactModalControllerTemplate.html',
	controller: 'modifyContactModalController',
	controllerAs: "vm",
	resolve: {
	contact: function () {
		return null;
	}
	}
});
};
	

var modify = function(contact) {
return  $uibModal.open({
	templateUrl: 'modifyContactModalControllerTemplate.html',
	controller: 'modifyContactModalController',
	controllerAs: 'vm',
	resolve: {
	contact: function () {
		return contact;
	}
	}
});
};
return {
Add: add,
Modify: modify
};
}
angular.module("app").factory("contactsModalService", contactsModalService);

