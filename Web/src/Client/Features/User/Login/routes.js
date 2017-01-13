var config = function ($stateProvider) {
    
$stateProvider
    .state("login", {
        url: "/login",
        template: "<login></login>"
    }) 
     .state("userprofile", {
        url: "/userprofile",
        template: "<user-profile></user-profile>"
    }) 
    
};

angular.module("app").config(config);

