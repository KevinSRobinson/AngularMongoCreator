
var modifyContactModalController = function ($uibModalInstance,  ContactModalService, contact) {
  var vm = this;
  vm.contact  = {}

  vm.init = function () {
    if (contact != null) {
      vm.contact = contact;
    };
  };
  
  vm.save = function () {
    var contactPromise = ContactModalService.Modify(vm.contact);
    contactPromise.then(function (response) {
      $uibModalInstance.close(response);
    });
  };

  vm.close = function () {
    $uibModalInstance.close();
  };

  vm.init();

};
angular.module("app").controller("modifyContactModalController", modifyContactModalController);


