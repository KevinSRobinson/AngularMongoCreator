
var modifyOrganisationModalController = function ($uibModalInstance,  OrganisationModalService, organisation) {
  var vm = this;
  vm.organisation  = {}

  vm.init = function () {
    if (organisation != null) {
      vm.organisation = organisation;
    };
  };
  
  vm.save = function () {
    var organisationPromise = OrganisationModalService.Modify(vm.organisation);
    organisationPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyOrganisationModalController", modifyOrganisationModalController);


