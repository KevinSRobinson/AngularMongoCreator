'use strict';

var cov_eap6dazbj = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Login\\login.js',
        hash = '39b2251407924a1243c0d0f6f8e00d5604ea9de4',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Login\\login.js',
        statementMap: {
            '0': {
                start: {
                    line: 1,
                    column: 12
                },
                end: {
                    line: 11,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 5,
                    column: 17
                },
                end: {
                    line: 5,
                    column: 21
                }
            },
            '2': {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 37
                }
            },
            '3': {
                start: {
                    line: 13,
                    column: 0
                },
                end: {
                    line: 13,
                    column: 32
                }
            },
            '4': {
                start: {
                    line: 15,
                    column: 0
                },
                end: {
                    line: 15,
                    column: 48
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 3,
                        column: 16
                    },
                    end: {
                        line: 3,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 3,
                        column: 39
                    },
                    end: {
                        line: 9,
                        column: 5
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
            '4': 0
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

var login = (++cov_eap6dazbj.s[0], {
    controllerAs: 'vm',
    controller: function controller(authService) {
        ++cov_eap6dazbj.f[0];


        var vm = (++cov_eap6dazbj.s[1], this);

        ++cov_eap6dazbj.s[2];
        vm.authService = authService;
    },
    templateUrl: '/Login/LoginTemplate.html'
});

++cov_eap6dazbj.s[3];
login.$inject = ['authService'];

++cov_eap6dazbj.s[4];
angular.module('app').component('login', login);