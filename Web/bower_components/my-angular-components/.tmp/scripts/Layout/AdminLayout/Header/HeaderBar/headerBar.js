var adminHeaderBar = {
    transclude: true,
    bindings: {
        title: '@',
        theme: '@',
        userMenuItems: "=",
        alertMenuItems: "=",
        userName: '@'
    },
    controllerAs: 'vm',
    template:'<div class="row header"><div class="col-xs-12"><div class="user pull-right"><div class="item dropdown" uib-dropdown><user-options-drop-down-menu menu-items="vm.userMenuItems" user-name="{{vm.userName}}"></user-options-drop-down-menu></div><div class="item dropdown" uib-dropdown><alerts-drop-down-menu menu-items="vm.alertMenuItems"></alerts-drop-down-menu></div></div><div class="meta"><div class="page">{{vm.title}}</div></div></div></div>'
};


angular.module('my-angular-components').component('adminHeaderBar', adminHeaderBar);