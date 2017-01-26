
var modifyAwardsModalController = function ($uibModalInstance,  AwardsModalService, awards) {
  var vm = this;
  vm.awards  = {}

  vm.init = function () {
    if (awards != null) {
      vm.awards = awards;
    };
  };
  
  vm.save = function () {
    var awardsPromise = AwardsModalService.Modify(vm.awards);
    awardsPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyAwardsModalController", modifyAwardsModalController);


