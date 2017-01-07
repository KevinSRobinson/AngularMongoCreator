'use strict';

var cov_9d95gngof = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\routes.js',
        hash = 'a32bd54ce40356144bd10c244319262bcecb5b25',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\routes.js',
        statementMap: {
            '0': {
                start: {
                    line: 1,
                    column: 13
                },
                end: {
                    line: 8,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 3,
                    column: 0
                },
                end: {
                    line: 7,
                    column: 6
                }
            },
            '2': {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 37
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 1,
                        column: 13
                    },
                    end: {
                        line: 1,
                        column: 14
                    }
                },
                loc: {
                    start: {
                        line: 1,
                        column: 39
                    },
                    end: {
                        line: 8,
                        column: 1
                    }
                }
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0
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

++cov_9d95gngof.s[0];
var config = function config($stateProvider) {
    ++cov_9d95gngof.f[0];
    ++cov_9d95gngof.s[1];


    $stateProvider.state('contacts', {
        url: '/contacts',
        templateUrl: 'Features/Contacts/Views/index.html'
    });
};

++cov_9d95gngof.s[2];
angular.module('app').config(config);