var organisationAddressList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'Features/OrganisationAddresss/Components/organisationAddressList/organisationAddressList.html',
controller: function (OrganisationAddressDataService, OrganisationAddressModalService) {
    var vm = this;
    vm.error = {};
    vm.organisationAddresss = [];

    vm.init = function(){
        vm.loadorganisationAddresss();
    };

    vm.loadorganisationAddressss = function(){
        var organisationAddresssPromise= OrganisationAddressDataService.GetAllForCurrentUser();
        organisationAddresssPromise.then(function(response){
	        vm.organisationAddresss = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	
    //////////////////////
    //Modals
    vm.create = function(){
        var modal = OrganisationAddressModalService.Add();
        modal.result.then(function(response){
	        vm.organisationAddresss.push(response);
        });
    };

    vm.edit = function(organisationAddress){
        OrganisationAddressModalService.Modify(organisationAddress);
    };

    vm.view = function(organisationAddresss){
		OrganisationAddressModalService.View(organisationAddress);
	};

    vm.init();

    }
};

angular.module('app')
.component('organisationAddressList', organisationAddressList);
