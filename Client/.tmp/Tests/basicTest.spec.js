'use strict';

var cov_mweafz482 = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Tests\\basicTest.spec.js',
        hash = 'b53bcb57ef3a8f6e9bdf9bf7be38fbf1826728d9',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Tests\\basicTest.spec.js',
        statementMap: {
            '0': {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 3,
                    column: 3
                }
            },
            '1': {
                start: {
                    line: 2,
                    column: 4
                },
                end: {
                    line: 2,
                    column: 25
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 1,
                        column: 37
                    },
                    end: {
                        line: 1,
                        column: 38
                    }
                },
                loc: {
                    start: {
                        line: 1,
                        column: 49
                    },
                    end: {
                        line: 3,
                        column: 1
                    }
                }
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0
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

++cov_mweafz482.s[0];
it('should get at least 6 Avengers', function () {
    ++cov_mweafz482.f[0];
    ++cov_mweafz482.s[1];

    expect(1).toEqual(1);
});