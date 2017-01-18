var awardssList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'src/Client/Features/Awardss/Components/awardssList.html',
controller: function (awardssService, awardssModalService) {
    var vm = this;
    vm.error = {};
    vm.awardss = [];

    vm.init = function(){
        vm.loadawardsss();
    };

    vm.loadawardsss = function(){
        var awardssPromise= awardssService.GetAllForCurrentUser();
        awardssPromise.then(function(response){
	        vm.awardss = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = awardssModalService.Add();
        modal.result.then(function(response){
	        vm.awardss.push(response);
        });
    };

    vm.edit = function(awards){
        awardssModalService.Modify(awards);
    };

    vm.view = function(awardss){
		awardssModalService.View(awards);
	};

    vm.init();

    }
};
angular.module('app').component('awardssList', awardssList);
