'use strict';

var cov_2351gp6cyx = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\contactsModalService.js',
        hash = 'f70ab2200829e592f0ab3a3a516e198ad1e04568',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\contactsModalService.js',
        statementMap: {
            '0': {
                start: {
                    line: 1,
                    column: 27
                },
                end: {
                    line: 33,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 3,
                    column: 14
                },
                end: {
                    line: 14,
                    column: 5
                }
            },
            '2': {
                start: {
                    line: 4,
                    column: 8
                },
                end: {
                    line: 13,
                    column: 11
                }
            },
            '3': {
                start: {
                    line: 10,
                    column: 20
                },
                end: {
                    line: 10,
                    column: 32
                }
            },
            '4': {
                start: {
                    line: 17,
                    column: 17
                },
                end: {
                    line: 28,
                    column: 5
                }
            },
            '5': {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 27,
                    column: 11
                }
            },
            '6': {
                start: {
                    line: 24,
                    column: 20
                },
                end: {
                    line: 24,
                    column: 35
                }
            },
            '7': {
                start: {
                    line: 29,
                    column: 4
                },
                end: {
                    line: 32,
                    column: 6
                }
            },
            '8': {
                start: {
                    line: 34,
                    column: 0
                },
                end: {
                    line: 34,
                    column: 81
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 1,
                        column: 27
                    },
                    end: {
                        line: 1,
                        column: 28
                    }
                },
                loc: {
                    start: {
                        line: 1,
                        column: 48
                    },
                    end: {
                        line: 33,
                        column: 1
                    }
                }
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 3,
                        column: 14
                    },
                    end: {
                        line: 3,
                        column: 15
                    }
                },
                loc: {
                    start: {
                        line: 3,
                        column: 26
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                }
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 9,
                        column: 25
                    },
                    end: {
                        line: 9,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 9,
                        column: 37
                    },
                    end: {
                        line: 11,
                        column: 17
                    }
                }
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 17,
                        column: 17
                    },
                    end: {
                        line: 17,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 17,
                        column: 36
                    },
                    end: {
                        line: 28,
                        column: 5
                    }
                }
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 23,
                        column: 25
                    },
                    end: {
                        line: 23,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 23,
                        column: 37
                    },
                    end: {
                        line: 25,
                        column: 17
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
            '8': 0
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

++cov_2351gp6cyx.s[0];
var contactsModalService = function contactsModalService($uibModal) {
    ++cov_2351gp6cyx.f[0];
    ++cov_2351gp6cyx.s[1];


    var add = function add() {
        ++cov_2351gp6cyx.f[1];
        ++cov_2351gp6cyx.s[2];

        return $uibModal.open({
            templateUrl: 'modifyContactModalControllerTemplate.html',
            controller: 'modifyContactModalController',
            controllerAs: "vm",
            resolve: {
                contact: function contact() {
                    ++cov_2351gp6cyx.f[2];
                    ++cov_2351gp6cyx.s[3];

                    return null;
                }
            }
        });
    };

    ++cov_2351gp6cyx.s[4];
    var modify = function modify(_contact) {
        ++cov_2351gp6cyx.f[3];
        ++cov_2351gp6cyx.s[5];

        return $uibModal.open({
            templateUrl: 'modifyContactModalControllerTemplate.html',
            controller: 'modifyContactModalController',
            controllerAs: 'vm',
            resolve: {
                contact: function contact() {
                    ++cov_2351gp6cyx.f[4];
                    ++cov_2351gp6cyx.s[6];

                    return _contact;
                }
            }
        });
    };
    ++cov_2351gp6cyx.s[7];
    return {
        Add: add,
        Modify: modify
    };
};
++cov_2351gp6cyx.s[8];
angular.module("contacts").factory("contactsModalService", contactsModalService);