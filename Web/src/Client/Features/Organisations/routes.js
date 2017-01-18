var config = function ($stateProvider) {
    
$stateProvider
    .state('organisations', {
        url: '/organisations',
        templateUrl: 'src/Client/Features/Organisations/Views/index.html'
    }) 
};

angular.module('app').config(config);
