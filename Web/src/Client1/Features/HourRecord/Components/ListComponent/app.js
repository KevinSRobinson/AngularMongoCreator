var hourRecordsList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'src/Client/Features/HourRecords/Components/hourRecordsList.html',
controller: function (hourRecordsService, hourRecordsModalService) {
    var vm = this;
    vm.error = {};
    vm.hourRecords = [];

    vm.init = function(){
        vm.loadhourRecordss();
    };

    vm.loadhourRecordss = function(){
        var hourRecordsPromise= hourRecordsService.GetAllForCurrentUser();
        hourRecordsPromise.then(function(response){
	        vm.hourRecords = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = hourRecordsModalService.Add();
        modal.result.then(function(response){
	        vm.hourRecords.push(response);
        });
    };

    vm.edit = function(hourRecord){
        hourRecordsModalService.Modify(hourRecord);
    };

    vm.view = function(hourRecords){
		hourRecordsModalService.View(hourRecord);
	};

    vm.init();

    }
};
angular.module('app')
.component('hourRecordsList', hourRecordsList);
