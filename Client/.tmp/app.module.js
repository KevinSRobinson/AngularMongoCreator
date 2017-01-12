'use strict';

var cov_1911a397ep = function () {
  var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.module.js',
      hash = '8f040ac59affbbc6d53c71afb21ac7d6a325e9ac',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\app.module.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 40,
          column: 5
        }
      },
      '1': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 20
        }
      },
      '2': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 98
        }
      },
      '3': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 21,
          column: 7
        }
      },
      '4': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 42
        }
      },
      '5': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 36,
          column: 7
        }
      },
      '6': {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      '7': {
        start: {
          line: 30,
          column: 10
        },
        end: {
          line: 30,
          column: 22
        }
      },
      '8': {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 1,
            column: 1
          },
          end: {
            line: 1,
            column: 2
          }
        },
        loc: {
          start: {
            line: 1,
            column: 13
          },
          end: {
            line: 40,
            column: 1
          }
        }
      },
      '1': {
        name: 'config',
        decl: {
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 11,
            column: 17
          }
        },
        loc: {
          start: {
            line: 11,
            column: 88
          },
          end: {
            line: 38,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 28,
            column: 31
          },
          end: {
            line: 28,
            column: 32
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 33,
            column: 7
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }, {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 76
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 19
          }
        }, {
          start: {
            line: 29,
            column: 23
          },
          end: {
            line: 29,
            column: 76
          }
        }]
      }
    },
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
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_1911a397ep.s[0];
(function () {

  'use strict';

  ++cov_1911a397ep.f[0];
  ++cov_1911a397ep.s[1];
  angular.module('app', ['ui.router', 'ui.bootstrap', 'my-angular-components', 'auth0.lock', 'angular-jwt']).config(config);

  ++cov_1911a397ep.s[2];
  config.$inject = ['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider'];

  function config($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {
    ++cov_1911a397ep.f[1];
    ++cov_1911a397ep.s[3];


    lockProvider.init({
      clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
      domain: 'volunteernow.auth0.com',
      redirect: false,
      responseType: 'token'
    });

    ++cov_1911a397ep.s[4];
    $urlRouterProvider.otherwise('/home');

    // Configuration for angular-jwt
    ++cov_1911a397ep.s[5];
    jwtOptionsProvider.config({
      tokenGetter: ['options', function (options) {
        ++cov_1911a397ep.f[2];
        ++cov_1911a397ep.s[6];

        if ((++cov_1911a397ep.b[1][0], options) && (++cov_1911a397ep.b[1][1], options.url.substr(options.url.length - 5) == '.html')) {
          ++cov_1911a397ep.b[0][0];
          ++cov_1911a397ep.s[7];

          return null;
        } else {
          ++cov_1911a397ep.b[0][1];
        }
        ++cov_1911a397ep.s[8];
        return localStorage.getItem('id_token');
      }],
      whiteListedDomains: ['localhost'],
      unauthenticatedRedirectPath: '/login'
    });
  }
})();