var config = function ($stateProvider) {
    
$stateProvider
    .state('contacts', {
        url: '/contacts',
        templateUrl: 'src/Client/Features/Contacts/Views/index.html'
    }) 
};

angular.module('app').config(config);
