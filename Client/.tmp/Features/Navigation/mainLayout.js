"use strict";

var cov_1xkdkekd6f = function () {
    var path = "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Navigation\\mainLayout.js",
        hash = "dfc3197bc313b1086017ab6747b381adbe1a603f",
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Navigation\\mainLayout.js",
        statementMap: {
            "0": {
                start: {
                    line: 1,
                    column: 17
                },
                end: {
                    line: 59,
                    column: 1
                }
            },
            "1": {
                start: {
                    line: 8,
                    column: 17
                },
                end: {
                    line: 8,
                    column: 21
                }
            },
            "2": {
                start: {
                    line: 10,
                    column: 8
                },
                end: {
                    line: 10,
                    column: 38
                }
            },
            "3": {
                start: {
                    line: 12,
                    column: 8
                },
                end: {
                    line: 15,
                    column: 10
                }
            },
            "4": {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 34,
                    column: 11
                }
            },
            "5": {
                start: {
                    line: 36,
                    column: 8
                },
                end: {
                    line: 44,
                    column: 11
                }
            },
            "6": {
                start: {
                    line: 46,
                    column: 8
                },
                end: {
                    line: 57,
                    column: 9
                }
            },
            "7": {
                start: {
                    line: 61,
                    column: 0
                },
                end: {
                    line: 61,
                    column: 63
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 7,
                        column: 16
                    },
                    end: {
                        line: 7,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 7,
                        column: 28
                    },
                    end: {
                        line: 58,
                        column: 5
                    }
                }
            }
        },
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0
        },
        f: {
            "0": 0
        },
        b: {},
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var mainLayout = (++cov_1xkdkekd6f.s[0], {
    bindings: {
        allowChanges: "@"
    },
    controllerAs: "vm",
    templateUrl: "Features/Navigation/mainLayoutTemplate.html",
    controller: function controller() {
        ++cov_1xkdkekd6f.f[0];

        var vm = (++cov_1xkdkekd6f.s[1], this);

        ++cov_1xkdkekd6f.s[2];
        vm.userName = "Test Username";

        ++cov_1xkdkekd6f.s[3];
        vm.sideMenuItems = [{ state: 'contacts', linkText: 'Contacts', icon: 'cogs' }, { state: 'organisations', linkText: 'Organisations', icon: 'cogs' }];

        ++cov_1xkdkekd6f.s[4];
        vm.userMenuItems = [{
            state: "userprofile",
            linkText: "User Profile",
            icon: "user"
        }, {
            state: "useroptions",
            linkText: "User Options",
            icon: "cogs"
        }, {
            state: "logout",
            linkText: "Logout",
            icon: "cogs"
        }, {
            state: "login",
            linkText: "Login",
            icon: "check"
        }];

        ++cov_1xkdkekd6f.s[5];
        vm.alertMenuItems = [{
            state: "alert1",
            linkText: "Alert 1",
            icon: "bell"
        }, {
            state: "alert2",
            linkText: "Alert 3",
            icon: "bell"
        }];

        ++cov_1xkdkekd6f.s[6];
        vm.footerLinks = [{
            state: 'link1',
            linkText: "Link 1"
        }, {
            state: 'link2',
            linkText: "Link 2"
        }, {
            state: 'link3',
            linkText: "Link 3"
        }];
    }
});

++cov_1xkdkekd6f.s[7];
angular.module("contacts").component("mainLayout", mainLayout);