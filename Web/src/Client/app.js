
(function () {

  'use strict';

   var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'my-angular-components', 'auth0.lock', 'angular-jwt']);
   
    app.constant("apiBase", "http://localhost:7000/api/")

  var config = function (lockProvider, jwtOptionsProvider, $httpProvider) {

   

    lockProvider.init({
      clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
      domain: 'volunteernow.auth0.com'
    });

// Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      },
      whiteListedDomains: ['localhost'],
      unauthenticatedRedirectPath: '/login'
    });

    // Add the jwtInterceptor to the array of HTTP interceptors
    // so that JWTs are attached as Authorization headers
    $httpProvider.interceptors.push('jwtInterceptor');
  };


  config.$inject = ['lockProvider', 'jwtOptionsProvider', '$httpProvider'];

  app.config(config);
})();



