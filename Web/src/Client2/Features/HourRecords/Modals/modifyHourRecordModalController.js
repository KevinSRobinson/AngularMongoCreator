
var modifyHourRecordModalController = function ($uibModalInstance,  HourRecordModalService, hourRecord) {
  var vm = this;
  vm.hourRecord  = {}

  vm.init = function () {
    if (hourRecord != null) {
      vm.hourRecord = hourRecord;
    };
  };
  
  vm.save = function () {
    var hourRecordPromise = HourRecordModalService.Modify(vm.hourRecord);
    hourRecordPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyHourRecordModalController", modifyHourRecordModalController);


