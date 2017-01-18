var config = function ($stateProvider) {
    
$stateProvider
    .state('opportunitys', {
        url: '/opportunitys',
        templateUrl: 'src/Client/Features/Opportunitys/Views/index.html'
    }) 
};

angular.module('app').config(config);
