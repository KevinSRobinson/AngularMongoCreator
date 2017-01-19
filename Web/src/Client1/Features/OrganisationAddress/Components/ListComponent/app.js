var organisationAddresssList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'src/Client/Features/OrganisationAddresss/Components/organisationAddresssList.html',
controller: function (organisationAddresssService, organisationAddresssModalService) {
    var vm = this;
    vm.error = {};
    vm.organisationAddresss = [];

    vm.init = function(){
        vm.loadorganisationAddressss();
    };

    vm.loadorganisationAddressss = function(){
        var organisationAddresssPromise= organisationAddresssService.GetAllForCurrentUser();
        organisationAddresssPromise.then(function(response){
	        vm.organisationAddresss = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = organisationAddresssModalService.Add();
        modal.result.then(function(response){
	        vm.organisationAddresss.push(response);
        });
    };

    vm.edit = function(organisationAddress){
        organisationAddresssModalService.Modify(organisationAddress);
    };

    vm.view = function(organisationAddresss){
		organisationAddresssModalService.View(organisationAddress);
	};

    vm.init();

    }
};
angular.module('app')
.component('organisationAddresssList', organisationAddresssList);
