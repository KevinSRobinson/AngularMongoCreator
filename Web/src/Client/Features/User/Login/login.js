var login = {
    controllerAs:'vm',
    controller: function (authService) {

        var vm = this;

        vm.authService = authService;

    },
    templateUrl: 'src/Client/Features/User/Login/loginTemplate.html'
};

login.$inject = ['authService'];

angular.module('app').component('login', login);
