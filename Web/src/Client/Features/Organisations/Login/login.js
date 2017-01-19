var login = {
    controllerAs:'vm',
    controller: function (authService) {

        var vm = this;

        vm.authService = authService;

    },
    templateUrl: 'src/Client/Login/loginTemplate.html'
};

login.$inject = ['authService'];

angular.module('app').component('login', login);
