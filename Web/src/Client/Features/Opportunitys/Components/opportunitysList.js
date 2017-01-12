var opportunitysList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'Features/Opportunitys/Components/opportunitysList.html',
controller: function (opportunitysService, opportunitysModalService) {
    var vm = this;
    vm.error = {};
    vm.opportunitys = [];

    vm.init = function(){
        vm.loadopportunityss();
    };

    vm.loadopportunityss = function(){
        var opportunitysPromise= opportunitysService.GetAll();
        opportunitysPromise.then(function(response){
	     vm.opportunitys = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = opportunitysModalService.Add();
        modal.result.then(function(response){
	        vm.opportunitys.push(response);
        });
    };

    vm.edit = function(opportunity){
        opportunitysModalService.Modify(opportunity);
    };

    vm.view = function(opportunitys){
		opportunitysModalService.View(opportunity);
	};

    vm.init();

    }
};
angular.module('app').component('opportunitysList', opportunitysList);
