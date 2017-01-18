var config = function ($stateProvider) {
    
$stateProvider
    .state('awardss', {
        url: '/awardss',
        templateUrl: 'src/Client/Features/Awardss/Views/index.html'
    }) 
};

angular.module('app').config(config);
