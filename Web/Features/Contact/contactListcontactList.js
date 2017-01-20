var contactList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'C:/Repos/NodeMongoAngular/Web/src/Client2/Features//Contact/contactList',
controller: function (ContactDataService, ContactModalService) {
    var vm = this;
    vm.error = {};
    vm.contacts = [];

    vm.init = function(){
        vm.loadcontacts();
    };

    vm.loadcontactss = function(){
        var contactsPromise= ContactDataService.GetAllForCurrentUser();
        contactsPromise.then(function(response){
	        vm.contacts = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	
    //////////////////////
    //Modals
    vm.create = function(){
        var modal = ContactModalService.Add();
        modal.result.then(function(response){
	        vm.contacts.push(response);
        });
    };

    vm.edit = function(contact){
        ContactModalService.Modify(contact);
    };

    vm.view = function(contacts){
		ContactModalService.View(contact);
	};

    vm.init();

    }
};
99999999
C:/Repos/NodeMongoAngular/Web//Features/Contact/contactList
angular.module('app')
.component('contactList', contactList);