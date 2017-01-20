var awardsList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'C:/Repos/NodeMongoAngular/Web/src/Client2/Features//Awards/awardsList',
controller: function (AwardsDataService, AwardsModalService) {
    var vm = this;
    vm.error = {};
    vm.awardss = [];

    vm.init = function(){
        vm.loadawardss();
    };

    vm.loadawardsss = function(){
        var awardssPromise= AwardsDataService.GetAllForCurrentUser();
        awardssPromise.then(function(response){
	        vm.awardss = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	
    //////////////////////
    //Modals
    vm.create = function(){
        var modal = AwardsModalService.Add();
        modal.result.then(function(response){
	        vm.awardss.push(response);
        });
    };

    vm.edit = function(awards){
        AwardsModalService.Modify(awards);
    };

    vm.view = function(awardss){
		AwardsModalService.View(awards);
	};

    vm.init();

    }
};
99999999
C:/Repos/NodeMongoAngular/Web//Features/Awards/awardsList
angular.module('app')
.component('awardsList', awardsList);
