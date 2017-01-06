'use strict';

var cov_2lp3kze80b = function () {
  var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.js',
      hash = 'f852938799ed8241e9359047c0c40f9f58d19576',
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
          line: 28,
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
          column: 119
        }
      },
      '2': {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 22,
          column: 3
        }
      },
      '3': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      },
      '4': {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 48
        }
      },
      '5': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 20,
          column: 7
        }
      },
      '6': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 58
        }
      },
      '7': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 21
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
            line: 28,
            column: 1
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 16
          }
        },
        loc: {
          start: {
            line: 8,
            column: 59
          },
          end: {
            line: 22,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 20
          }
        },
        loc: {
          start: {
            line: 12,
            column: 31
          },
          end: {
            line: 14,
            column: 7
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
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
  var app = (++cov_2lp3kze80b.s[1], angular.module('app', ['ui.router', 'ui.bootstrap', 'my-angular-components', 'auth0.lock', 'angular-jwt']));

  ++cov_2lp3kze80b.s[2];
  var config = function config(lockProvider, jwtOptionsProvider) {
    ++cov_2lp3kze80b.f[1];
    ++cov_2lp3kze80b.s[3];


    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function tokenGetter() {
        ++cov_2lp3kze80b.f[2];
        ++cov_2lp3kze80b.s[4];

        return localStorage.getItem('id_token');
      }
    });

    ++cov_2lp3kze80b.s[5];
    lockProvider.init({
      clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
      domain: 'volunteernow.auth0.com'
    });
  };

  ++cov_2lp3kze80b.s[6];
  config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  ++cov_2lp3kze80b.s[7];
  app.config(config);
})();