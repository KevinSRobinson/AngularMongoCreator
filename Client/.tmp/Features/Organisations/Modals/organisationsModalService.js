'use strict';

var cov_1e3xnypfhh = function () {
	var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\organisationsModalService.js',
	    hash = 'ef1278103c0288468bb88d21ad508706c705311d',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\Modals\\organisationsModalService.js',
		statementMap: {
			'0': {
				start: {
					line: 3,
					column: 36
				},
				end: {
					line: 35,
					column: 1
				}
			},
			'1': {
				start: {
					line: 5,
					column: 13
				},
				end: {
					line: 16,
					column: 2
				}
			},
			'2': {
				start: {
					line: 6,
					column: 2
				},
				end: {
					line: 15,
					column: 5
				}
			},
			'3': {
				start: {
					line: 12,
					column: 5
				},
				end: {
					line: 12,
					column: 17
				}
			},
			'4': {
				start: {
					line: 19,
					column: 14
				},
				end: {
					line: 30,
					column: 4
				}
			},
			'5': {
				start: {
					line: 20,
					column: 2
				},
				end: {
					line: 29,
					column: 5
				}
			},
			'6': {
				start: {
					line: 26,
					column: 5
				},
				end: {
					line: 26,
					column: 25
				}
			},
			'7': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 34,
					column: 5
				}
			},
			'8': {
				start: {
					line: 36,
					column: 0
				},
				end: {
					line: 36,
					column: 91
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 3,
						column: 36
					},
					end: {
						line: 3,
						column: 37
					}
				},
				loc: {
					start: {
						line: 3,
						column: 55
					},
					end: {
						line: 35,
						column: 1
					}
				}
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 5,
						column: 13
					},
					end: {
						line: 5,
						column: 14
					}
				},
				loc: {
					start: {
						line: 5,
						column: 24
					},
					end: {
						line: 16,
						column: 2
					}
				}
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 11,
						column: 17
					},
					end: {
						line: 11,
						column: 18
					}
				},
				loc: {
					start: {
						line: 11,
						column: 29
					},
					end: {
						line: 13,
						column: 4
					}
				}
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 19,
						column: 14
					},
					end: {
						line: 19,
						column: 15
					}
				},
				loc: {
					start: {
						line: 19,
						column: 37
					},
					end: {
						line: 30,
						column: 4
					}
				}
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 25,
						column: 17
					},
					end: {
						line: 25,
						column: 18
					}
				},
				loc: {
					start: {
						line: 25,
						column: 29
					},
					end: {
						line: 27,
						column: 4
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
			templateUrl: 'modifyOrganisationModalControllerTemplate.html',
			controller: 'modifyOrganisationModalController',
			controllerAs: "vm",
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
			templateUrl: 'modifyOrganisationModalControllerTemplate.html',
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
angular.module("contacts").factory("organisationsModalService", organisationsModalService);