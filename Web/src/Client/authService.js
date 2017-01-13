    
    var authService = function($rootScope, lock, authManager, $q) {

 var userProfile = JSON.parse(localStorage.getItem('profile')) || null;
        var deferredProfile = $q.defer();

        if (userProfile) {
            deferredProfile.resolve(userProfile);
        }

        function getProfileDeferred() {
            return deferredProfile.promise;
        }

        function login() {
            lock.show();
        }

        function logout() {
            localStorage.removeItem('id_token');
            authManager.unauthenticate();
        }

//  function getProfileDeferred() {            
//             var userProfile = JSON.parse(localStorage.getItem('profile')) || null;
//             var deferredProfile = $q.defer();
//             if (userProfile) {
//                 deferredProfile.resolve(userProfile);
//             }
//             return deferredProfile.promise;
//         }

        // Set up the logic for when a user authenticates
        // This method is called from app.run.js
        function registerAuthenticationListener() {
            lock.on('authenticated', function (authResult) {
                console.log('----------------------');
                console.log('-----------authenticated-----------');
                localStorage.setItem('id_token', authResult.idToken);
                authManager.authenticate();
            });

            lock.on('authenticated', function (authResult) {

                lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        return console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profile));
                    deferredProfile.resolve(profile);
                });

            });
        }

        return {
            login: login,
            logout: logout,
            isAuthenticated: $rootScope.isAuthenticated,
            registerAuthenticationListener: registerAuthenticationListener,
            getProfileDeferred: getProfileDeferred
        };
    };

    authService.$inject = ['$rootScope','lock', 'authManager', '$q'];

    angular.module('app').factory('authService', authService);



