var config = function ($stateProvider) {
    
$stateProvider
    .state('organisations', {
        url: '/organisations',
        templateUrl: 'Features/Organisations/Views/index.html'
    }) 
};

angular.module('app').config(config);
