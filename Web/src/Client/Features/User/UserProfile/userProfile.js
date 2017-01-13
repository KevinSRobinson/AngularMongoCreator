var userProfile = {
    controllerAs: 'vm',
    controller: function ($rootScope, authService) {
        var vm = this;

        vm.authService = authService;
        vm.isAuthenticated = $rootScope.isAuthenticated;

        vm.$onInit = function () {
            if (vm.isAuthenticated) {
                loadUserProfile();
            }
        }

        var loadUserProfile = function () {
            authService.getProfileDeferred().then(function (profile) {
                vm.profile = profile;
            });
        }


    },
    templateUrl: 'src/Client/Features/User/UserProfile/userProfileTemplate.html'
};

angular.module('app').component('userProfile', userProfile);