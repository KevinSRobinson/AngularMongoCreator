





















(function () {

  'use strict';

   var app = angular.module('contacts', ['ui.router', 'ui.bootstrap', 'my-angular-components', 'auth0.lock', 'angular-jwt']);

  var config = function (lockProvider, jwtOptionsProvider) {

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      }
    });

    lockProvider.init({
      clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
      domain: 'volunteernow.auth0.com'
    });

  };


  config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  app.config(config);
})();



