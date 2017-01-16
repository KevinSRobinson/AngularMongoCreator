var config = function ($stateProvider) {
    
$stateProvider
    .state("login", {
        url: "/login",
        template: "<login></login>"
    }) 
};

angular.module("app").config(config);

