'use strict';

var cov_1efqvhlrp1 = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.run.js',
        hash = '99225eca0015c9f994a577fcdc6817d1c987e1cb',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.run.js',
        statementMap: {
            '0': {
                start: {
                    line: 2,
                    column: 10
                },
                end: {
                    line: 19,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 5,
                    column: 4
                },
                end: {
                    line: 5,
                    column: 41
                }
            },
            '2': {
                start: {
                    line: 9,
                    column: 4
                },
                end: {
                    line: 9,
                    column: 49
                }
            },
            '3': {
                start: {
                    line: 14,
                    column: 4
                },
                end: {
                    line: 14,
                    column: 37
                }
            },
            '4': {
                start: {
                    line: 18,
                    column: 4
                },
                end: {
                    line: 18,
                    column: 25
                }
            },
            '5': {
                start: {
                    line: 21,
                    column: 0
                },
                end: {
                    line: 21,
                    column: 67
                }
            },
            '6': {
                start: {
                    line: 23,
                    column: 0
                },
                end: {
                    line: 23,
                    column: 31
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 2,
                        column: 10
                    },
                    end: {
                        line: 2,
                        column: 11
                    }
                },
                loc: {
                    start: {
                        line: 2,
                        column: 63
                    },
                    end: {
                        line: 19,
                        column: 1
                    }
                }
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0
        },
        f: {
            '0': 0
        },
        b: {},
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

++cov_1efqvhlrp1.s[0];

var run = function run($rootScope, authService, lock, authManager) {
    ++cov_1efqvhlrp1.f[0];
    ++cov_1efqvhlrp1.s[1];

    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    ++cov_1efqvhlrp1.s[2];
    authService.registerAuthenticationListener();

    // Use the authManager from angular-jwt to check for
    // the user's authentication state when the page is
    // refreshed and maintain authentication
    ++cov_1efqvhlrp1.s[3];
    authManager.checkAuthOnRefresh();

    // Register the synchronous hash parser
    // when using UI Router
    ++cov_1efqvhlrp1.s[4];
    lock.interceptHash();
};

++cov_1efqvhlrp1.s[5];
run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];

++cov_1efqvhlrp1.s[6];
angular.module('app').run(run);