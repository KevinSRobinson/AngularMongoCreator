'use strict';

var cov_26gxlh5r2f = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\authService.js',
        hash = 'db32dfee46de30c2ccd4269a08363b01d4a0f47f',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\authService.js',
        statementMap: {
            '0': {
                start: {
                    line: 3,
                    column: 22
                },
                end: {
                    line: 29,
                    column: 5
                }
            },
            '1': {
                start: {
                    line: 6,
                    column: 12
                },
                end: {
                    line: 6,
                    column: 24
                }
            },
            '2': {
                start: {
                    line: 10,
                    column: 12
                },
                end: {
                    line: 10,
                    column: 48
                }
            },
            '3': {
                start: {
                    line: 11,
                    column: 12
                },
                end: {
                    line: 11,
                    column: 41
                }
            },
            '4': {
                start: {
                    line: 17,
                    column: 12
                },
                end: {
                    line: 20,
                    column: 15
                }
            },
            '5': {
                start: {
                    line: 18,
                    column: 16
                },
                end: {
                    line: 18,
                    column: 69
                }
            },
            '6': {
                start: {
                    line: 19,
                    column: 16
                },
                end: {
                    line: 19,
                    column: 43
                }
            },
            '7': {
                start: {
                    line: 23,
                    column: 8
                },
                end: {
                    line: 28,
                    column: 10
                }
            },
            '8': {
                start: {
                    line: 31,
                    column: 4
                },
                end: {
                    line: 31,
                    column: 63
                }
            },
            '9': {
                start: {
                    line: 33,
                    column: 4
                },
                end: {
                    line: 33,
                    column: 67
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 3,
                        column: 22
                    },
                    end: {
                        line: 3,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 3,
                        column: 62
                    },
                    end: {
                        line: 29,
                        column: 5
                    }
                }
            },
            '1': {
                name: 'login',
                decl: {
                    start: {
                        line: 5,
                        column: 17
                    },
                    end: {
                        line: 5,
                        column: 22
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 25
                    },
                    end: {
                        line: 7,
                        column: 9
                    }
                }
            },
            '2': {
                name: 'logout',
                decl: {
                    start: {
                        line: 9,
                        column: 17
                    },
                    end: {
                        line: 9,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 9,
                        column: 26
                    },
                    end: {
                        line: 12,
                        column: 9
                    }
                }
            },
            '3': {
                name: 'registerAuthenticationListener',
                decl: {
                    start: {
                        line: 16,
                        column: 17
                    },
                    end: {
                        line: 16,
                        column: 47
                    }
                },
                loc: {
                    start: {
                        line: 16,
                        column: 50
                    },
                    end: {
                        line: 21,
                        column: 9
                    }
                }
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 17,
                        column: 37
                    },
                    end: {
                        line: 17,
                        column: 38
                    }
                },
                loc: {
                    start: {
                        line: 17,
                        column: 59
                    },
                    end: {
                        line: 20,
                        column: 13
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
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0
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

++cov_26gxlh5r2f.s[0];


var authService = function authService($rootScope, lock, authManager) {
    ++cov_26gxlh5r2f.f[0];


    function login() {
        ++cov_26gxlh5r2f.f[1];
        ++cov_26gxlh5r2f.s[1];

        lock.show();
    }

    function logout() {
        ++cov_26gxlh5r2f.f[2];
        ++cov_26gxlh5r2f.s[2];

        localStorage.removeItem('id_token');
        ++cov_26gxlh5r2f.s[3];
        authManager.unauthenticate();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
        ++cov_26gxlh5r2f.f[3];
        ++cov_26gxlh5r2f.s[4];

        lock.on('authenticated', function (authResult) {
            ++cov_26gxlh5r2f.f[4];
            ++cov_26gxlh5r2f.s[5];

            localStorage.setItem('id_token', authResult.idToken);
            ++cov_26gxlh5r2f.s[6];
            authManager.authenticate();
        });
    }

    ++cov_26gxlh5r2f.s[7];
    return {
        login: login,
        logout: logout,
        isAuthenticated: $rootScope.isAuthenticated,
        registerAuthenticationListener: registerAuthenticationListener
    };
};

++cov_26gxlh5r2f.s[8];
authService.$inject = ['$rootScope', 'lock', 'authManager'];

++cov_26gxlh5r2f.s[9];
angular.module('contacts').factory('authService', authService);