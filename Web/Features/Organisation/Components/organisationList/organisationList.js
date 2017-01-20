var organisationList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'Features/Organisations/Components/organisationList/organisationList.html',
controller: function (OrganisationDataService, OrganisationModalService) {
    var vm = this;
    vm.error = {};
    vm.organisations = [];

    vm.init = function(){
        vm.loadorganisations();
    };

    vm.loadorganisationss = function(){
        var organisationsPromise= OrganisationDataService.GetAllForCurrentUser();
        organisationsPromise.then(function(response){
	        vm.organisations = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	
    //////////////////////
    //Modals
    vm.create = function(){
        var modal = OrganisationModalService.Add();
        modal.result.then(function(response){
	        vm.organisations.push(response);
        });
    };

    vm.edit = function(organisation){
        OrganisationModalService.Modify(organisation);
    };

    vm.view = function(organisations){
		OrganisationModalService.View(organisation);
	};

    vm.init();

    }

99987899
};

angular.module('app')
.component('organisationList', organisationList);
