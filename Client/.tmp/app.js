'use strict';

var cov_2lp3kze80b = function () {
  var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.js',
      hash = '402d01532e10b6f3300b6caa13935415ee23ff2e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 9,
          column: 5
        }
      },
      '1': {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 6,
          column: 90
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 2,
            column: 1
          },
          end: {
            line: 2,
            column: 2
          }
        },
        loc: {
          start: {
            line: 2,
            column: 13
          },
          end: {
            line: 9,
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

++cov_2lp3kze80b.s[0];

(function () {

  'use strict';

  ++cov_2lp3kze80b.f[0];
  var app = (++cov_2lp3kze80b.s[1], angular.module('app', ['ui.router', 'ui.bootstrap', 'my-angular-components']));
})();