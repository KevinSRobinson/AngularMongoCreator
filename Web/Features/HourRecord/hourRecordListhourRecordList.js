var hourRecordList = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'C:/Repos/NodeMongoAngular/Web/src/Client2/Features//HourRecord/hourRecordList',
controller: function (HourRecordDataService, HourRecordModalService) {
    var vm = this;
    vm.error = {};
    vm.hourRecords = [];

    vm.init = function(){
        vm.loadhourRecords();
    };

    vm.loadhourRecordss = function(){
        var hourRecordsPromise= HourRecordDataService.GetAllForCurrentUser();
        hourRecordsPromise.then(function(response){
	        vm.hourRecords = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	
    //////////////////////
    //Modals
    vm.create = function(){
        var modal = HourRecordModalService.Add();
        modal.result.then(function(response){
	        vm.hourRecords.push(response);
        });
    };

    vm.edit = function(hourRecord){
        HourRecordModalService.Modify(hourRecord);
    };

    vm.view = function(hourRecords){
		HourRecordModalService.View(hourRecord);
	};

    vm.init();

    }
};
99999999
C:/Repos/NodeMongoAngular/Web//Features/HourRecord/hourRecordList
angular.module('app')
.component('hourRecordList', hourRecordList);
