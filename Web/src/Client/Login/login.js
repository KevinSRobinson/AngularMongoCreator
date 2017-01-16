var login = {
    controllerAs:'vm',
    controller: function (authService) {

        var vm = this;

        vm.authService = authService;

    },
    templateUrl: '/Login/LoginTemplate.html'
};

login.$inject = ['authService'];

angular.module('app').component('login', login);
