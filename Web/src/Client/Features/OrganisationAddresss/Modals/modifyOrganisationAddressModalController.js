var modifyOrganisationAddressModalController = function ($uibModalInstance,  organisationAddresssService, organisationAddress) {
  var vm = this;
  vm.organisationAddress  = {}

  vm.init = function () {
    if (organisationAddress != null) {
      vm.organisationAddress = organisationAddress;
    };
  };
  
  vm.save = function () {
    var organisationAddressPromise = organisationAddresssService.Modify(vm.organisationAddress);
    organisationAddressPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyOrganisationAddressModalController", modifyOrganisationAddressModalController);
