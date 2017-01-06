"use strict";

var cov_1lwhpxqlu4 = function () {
  var path = "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\modifyContactModalController.js",
      hash = "460c33f21c75bbb269129e9ca8b58ec538556220",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\modifyContactModalController.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 35
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 11
        },
        end: {
          line: 2,
          column: 15
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 18
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      "4": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 8,
          column: 5
        }
      },
      "5": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 27
        }
      },
      "6": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 16,
          column: 4
        }
      },
      "7": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      },
      "9": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 40
        }
      },
      "10": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 4
        }
      },
      "11": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "12": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 12
        }
      },
      "13": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 95
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 35
          },
          end: {
            line: 1,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1,
            column: 91
          },
          end: {
            line: 24,
            column: 1
          }
        }
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 12
          },
          end: {
            line: 5,
            column: 13
          }
        },
        loc: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 9,
            column: 3
          }
        }
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 16,
            column: 3
          }
        }
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 25
          }
        },
        loc: {
          start: {
            line: 13,
            column: 44
          },
          end: {
            line: 15,
            column: 5
          }
        }
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 14
          }
        },
        loc: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 20,
            column: 3
          }
        }
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        }]
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_1lwhpxqlu4.s[0];
var modifyContactModalController = function modifyContactModalController($uibModalInstance, contactsService, contact) {
  ++cov_1lwhpxqlu4.f[0];

  var vm = (++cov_1lwhpxqlu4.s[1], this);
  ++cov_1lwhpxqlu4.s[2];
  vm.contact = {};

  ++cov_1lwhpxqlu4.s[3];
  vm.init = function () {
    ++cov_1lwhpxqlu4.f[1];
    ++cov_1lwhpxqlu4.s[4];

    if (contact != null) {
      ++cov_1lwhpxqlu4.b[0][0];
      ++cov_1lwhpxqlu4.s[5];

      vm.contact = contact;
    } else {
      ++cov_1lwhpxqlu4.b[0][1];
    };
  };

  ++cov_1lwhpxqlu4.s[6];
  vm.save = function () {
    ++cov_1lwhpxqlu4.f[2];

    var contactPromise = (++cov_1lwhpxqlu4.s[7], contactsService.Modify(vm.contact));
    ++cov_1lwhpxqlu4.s[8];
    contactPromise.then(function (response) {
      ++cov_1lwhpxqlu4.f[3];
      ++cov_1lwhpxqlu4.s[9];

      $uibModalInstance.close(response);
    });
  };

  ++cov_1lwhpxqlu4.s[10];
  vm.close = function () {
    ++cov_1lwhpxqlu4.f[4];
    ++cov_1lwhpxqlu4.s[11];

    $uibModalInstance.close();
  };

  ++cov_1lwhpxqlu4.s[12];
  vm.init();
};
++cov_1lwhpxqlu4.s[13];
angular.module("app").controller("modifyContactModalController", modifyContactModalController);