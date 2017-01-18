var config = function ($stateProvider) {
    
$stateProvider
    .state('hourRecords', {
        url: '/hourRecords',
        templateUrl: 'src/Client/Features/HourRecords/Views/index.html'
    }) 
};

angular.module('app').config(config);
