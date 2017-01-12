(function () {

    'use strict';

    angular
        .module('app')
        .service('authService', authService);

    authService.$inject = ['lock', 'authManager', '$q'];

    function authService(lock, authManager, $q) {
        console.log('-------------------------------');
        console.log('authService');

        

        function login() {
            console.log('-------------------------------');
            console.log('login');
            console.log('-------------------------------');
            lock.show();
        }

        // Logging out just requires removing the user's
        // id_token and profile
        function logout() {
            deferredProfile = $q.defer();
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            authManager.unauthenticate();
            userProfile = null;
        }

        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {           
            lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();

                lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        return console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profile));
                    deferredProfile.resolve(profile);
                });

            });
        }

        function getProfileDeferred() {
               console.log('-------------------------------');
            console.log('getProfileDeferred');
            console.log('-------------------------------');
            return deferredProfile.promise;
        }

        return {
            login: login,
            logout: logout,
            registerAuthenticationListener: registerAuthenticationListener,
            getProfileDeferred: getProfileDeferred
        }
    }
})();