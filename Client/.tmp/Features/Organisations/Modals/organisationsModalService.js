'use strict';

var cov_1e3xnypfhh = function () {
	var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\organisationsModalService.js',
	    hash = '9848f87dc898793a7363a91caf332af010c3e1af',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\organisationsModalService.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 33
				},
				end: {
					line: 34,
					column: 1
				}
			},
			'1': {
				start: {
					line: 4,
					column: 10
				},
				end: {
					line: 15,
					column: 1
				}
			},
			'2': {
				start: {
					line: 5,
					column: 0
				},
				end: {
					line: 14,
					column: 3
				}
			},
			'3': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 14
				}
			},
			'4': {
				start: {
					line: 18,
					column: 13
				},
				end: {
					line: 29,
					column: 1
				}
			},
			'5': {
				start: {
					line: 19,
					column: 0
				},
				end: {
					line: 28,
					column: 3
				}
			},
			'6': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 25,
					column: 22
				}
			},
			'7': {
				start: {
					line: 30,
					column: 0
				},
				end: {
					line: 33,
					column: 2
				}
			},
			'8': {
				start: {
					line: 35,
					column: 0
				},
				end: {
					line: 35,
					column: 86
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 2,
						column: 33
					},
					end: {
						line: 2,
						column: 34
					}
				},
				loc: {
					start: {
						line: 2,
						column: 52
					},
					end: {
						line: 34,
						column: 1
					}
				}
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 4,
						column: 10
					},
					end: {
						line: 4,
						column: 11
					}
				},
				loc: {
					start: {
						line: 4,
						column: 21
					},
					end: {
						line: 15,
						column: 1
					}
				}
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 10,
						column: 15
					},
					end: {
						line: 10,
						column: 16
					}
				},
				loc: {
					start: {
						line: 10,
						column: 27
					},
					end: {
						line: 12,
						column: 2
					}
				}
			},
			'3': {
				name: '(anonymous_3)',
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
						column: 36
					},
					end: {
						line: 29,
						column: 1
					}
				}
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 24,
						column: 15
					},
					end: {
						line: 24,
						column: 16
					}
				},
				loc: {
					start: {
						line: 24,
						column: 27
					},
					end: {
						line: 26,
						column: 2
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

++cov_1e3xnypfhh.s[0];

var organisationsModalService = function organisationsModalService($uibModal) {
	++cov_1e3xnypfhh.f[0];
	++cov_1e3xnypfhh.s[1];


	var add = function add() {
		++cov_1e3xnypfhh.f[1];
		++cov_1e3xnypfhh.s[2];

		return $uibModal.open({
			templateUrl: 'Features/Organisations/Modals/modifyOrganisationModalControllerTemplate.html',
			controller: 'modifyOrganisationModalController',
			controllerAs: 'vm',
			resolve: {
				organisation: function organisation() {
					++cov_1e3xnypfhh.f[2];
					++cov_1e3xnypfhh.s[3];

					return null;
				}
			}
		});
	};

	++cov_1e3xnypfhh.s[4];
	var modify = function modify(_organisation) {
		++cov_1e3xnypfhh.f[3];
		++cov_1e3xnypfhh.s[5];

		return $uibModal.open({
			templateUrl: 'Features/Organisations/Modals/modifyOrganisationModalControllerTemplate.html',
			controller: 'modifyOrganisationModalController',
			controllerAs: 'vm',
			resolve: {
				organisation: function organisation() {
					++cov_1e3xnypfhh.f[4];
					++cov_1e3xnypfhh.s[6];

					return _organisation;
				}
			}
		});
	};
	++cov_1e3xnypfhh.s[7];
	return {
		Add: add,
		Modify: modify
	};
};
++cov_1e3xnypfhh.s[8];
angular.module('app').factory('organisationsModalService', organisationsModalService);