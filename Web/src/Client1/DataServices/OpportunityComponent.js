var opportunitysList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'C:/Repos/NodeMongoAngular/Web/src/Client1/Features//Opportunity/OpportunityComponent',
controller: function (OpportunityDataService, OpportunityModalService) {
    var vm = this;
    vm.error = {};
    vm.opportunitys = [];

    vm.init = function(){
        vm.loadopportunitys();
    };

    vm.loadopportunityss = function(){
        var opportunitysPromise= OpportunityDataService.GetAllForCurrentUser();
        opportunitysPromise.then(function(response){
	        vm.opportunitys = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = OpportunityModalService.Add();
        modal.result.then(function(response){
	        vm.opportunitys.push(response);
        });
    };

    vm.edit = function(opportunity){
        OpportunityModalService.Modify(opportunity);
    };

    vm.view = function(opportunitys){
		OpportunityModalService.View(opportunity);
	};

    vm.init();

    }
};
angular.module('app')
.component('opportunitysList', opportunitysList);
