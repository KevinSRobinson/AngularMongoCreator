var contactsList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'src/Client/Features/Contacts/Components/contactsList.html',
controller: function (contactsService, contactsModalService) {
    var vm = this;
    vm.error = {};
    vm.contacts = [];

    vm.init = function(){
        vm.loadcontactss();
    };

    vm.loadcontactss = function(){
        var contactsPromise= contactsService.GetAllForCurrentUser();
        contactsPromise.then(function(response){
	        vm.contacts = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = contactsModalService.Add();
        modal.result.then(function(response){
	        vm.contacts.push(response);
        });
    };

    vm.edit = function(contact){
        contactsModalService.Modify(contact);
    };

    vm.view = function(contacts){
		contactsModalService.View(contact);
	};

    vm.init();

    }
};
angular.module('app')
.component('contactsList', contactsList);
