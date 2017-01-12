var config = function ($stateProvider) {
    
$stateProvider
    .state('awardss', {
        url: '/awardss',
        templateUrl: 'Features/Awardss/Views/index.html'
    }) 
};

angular.module('app').config(config);
