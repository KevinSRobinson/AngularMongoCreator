console.log("AwardsDataService 1");

var awardsController = function(AwardsDataService){
    var vm = this;
    vm.awards = [];
    console.log("AwardsDataService 2");
    vm.$onInit = function(){
        var awardsPromise = AwardsDataService.GetAll();
        awardsPromise.then(function(response){
            console.log(response);
        });
        console.log("AwardsDataService 3");
    };


}

angular.module("starter").controller("awardsController", awardsController);
