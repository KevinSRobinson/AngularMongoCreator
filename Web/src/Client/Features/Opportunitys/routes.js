var config = function ($stateProvider) {
    
$stateProvider
    .state('opportunitys', {
        url: '/opportunitys',
        templateUrl: 'Features/Opportunitys/Views/index.html'
    }) 
};

angular.module('app').config(config);
