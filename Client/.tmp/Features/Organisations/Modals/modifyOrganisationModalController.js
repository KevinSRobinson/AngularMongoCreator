"use strict";

var cov_139z9mtdjo = function () {
  var path = "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\modifyOrganisationModalController.js",
      hash = "7153cd40cd3c98631b279ab6a07de7817b118587",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\modifyOrganisationModalController.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 40
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
          column: 23
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
          column: 37
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
          column: 30
        },
        end: {
          line: 12,
          column: 74
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
          column: 105
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 40
          },
          end: {
            line: 1,
            column: 41
          }
        },
        loc: {
          start: {
            line: 1,
            column: 106
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
            column: 29
          },
          end: {
            line: 13,
            column: 30
          }
        },
        loc: {
          start: {
            line: 13,
            column: 49
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

++cov_139z9mtdjo.s[0];
var modifyOrganisationModalController = function modifyOrganisationModalController($uibModalInstance, organisationsService, organisation) {
  ++cov_139z9mtdjo.f[0];

  var vm = (++cov_139z9mtdjo.s[1], this);
  ++cov_139z9mtdjo.s[2];
  vm.organisation = {};

  ++cov_139z9mtdjo.s[3];
  vm.init = function () {
    ++cov_139z9mtdjo.f[1];
    ++cov_139z9mtdjo.s[4];

    if (organisation != null) {
      ++cov_139z9mtdjo.b[0][0];
      ++cov_139z9mtdjo.s[5];

      vm.organisation = organisation;
    } else {
      ++cov_139z9mtdjo.b[0][1];
    };
  };

  ++cov_139z9mtdjo.s[6];
  vm.save = function () {
    ++cov_139z9mtdjo.f[2];

    var organisationPromise = (++cov_139z9mtdjo.s[7], organisationsService.Modify(vm.organisation));
    ++cov_139z9mtdjo.s[8];
    organisationPromise.then(function (response) {
      ++cov_139z9mtdjo.f[3];
      ++cov_139z9mtdjo.s[9];

      $uibModalInstance.close(response);
    });
  };

  ++cov_139z9mtdjo.s[10];
  vm.close = function () {
    ++cov_139z9mtdjo.f[4];
    ++cov_139z9mtdjo.s[11];

    $uibModalInstance.close();
  };

  ++cov_139z9mtdjo.s[12];
  vm.init();
};
++cov_139z9mtdjo.s[13];
angular.module("app").controller("modifyOrganisationModalController", modifyOrganisationModalController);