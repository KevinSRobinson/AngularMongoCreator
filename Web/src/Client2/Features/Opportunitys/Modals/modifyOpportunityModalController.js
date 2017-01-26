
var modifyOpportunityModalController = function ($uibModalInstance,  OpportunityModalService, opportunity) {
  var vm = this;
  vm.opportunity  = {}

  vm.init = function () {
    if (opportunity != null) {
      vm.opportunity = opportunity;
    };
  };
  
  vm.save = function () {
    var opportunityPromise = OpportunityModalService.Modify(vm.opportunity);
    opportunityPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyOpportunityModalController", modifyOpportunityModalController);


