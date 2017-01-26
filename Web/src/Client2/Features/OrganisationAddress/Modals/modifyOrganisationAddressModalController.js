
var modifyOrganisationAddressModalController = function ($uibModalInstance,  OrganisationAddressModalService, organisationAddress) {
  var vm = this;
  vm.organisationAddress  = {}

  vm.init = function () {
    if (organisationAddress != null) {
      vm.organisationAddress = organisationAddress;
    };
  };
  
  vm.save = function () {
    var organisationAddressPromise = OrganisationAddressModalService.Modify(vm.organisationAddress);
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


