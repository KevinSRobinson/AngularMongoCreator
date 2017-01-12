var config = function ($stateProvider) {
    
$stateProvider
    .state('organisationAddresss', {
        url: '/organisationAddresss',
        templateUrl: 'Features/OrganisationAddresss/Views/index.html'
    }) 
};

angular.module('app').config(config);
