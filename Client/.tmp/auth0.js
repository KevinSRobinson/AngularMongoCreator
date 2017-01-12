'use strict';

var cov_2bfcv02lys = function () {
  var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\auth0.js',
      hash = '700d391251324c989343858a8f97a85571fc5e38',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\auth0.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 20
        },
        end: {
          line: 1,
          column: 54
        }
      },
      '1': {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 2,
          column: 41
        }
      },
      '2': {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 3,
          column: 42
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {},
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

var AUTH0_CLIENT_ID = (++cov_2bfcv02lys.s[0], 'MLpDhIY0DiuyoTWZASWiRLYUraTueTG3');
var AUTH0_DOMAIN = (++cov_2bfcv02lys.s[1], 'volunteernow.auth0.com');
var AUTH0_CALLBACK_URL = (++cov_2bfcv02lys.s[2], 'YOUR_CALLBACK_URL');