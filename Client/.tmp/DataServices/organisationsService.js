'use strict';

var cov_vjibou8db = function () {
	var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\DataServices\\organisationsService.js',
	    hash = 'f5d4f3e20e9f36635a2ea610f71619112f939c13',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\DataServices\\organisationsService.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 27
				},
				end: {
					line: 28,
					column: 1
				}
			},
			'1': {
				start: {
					line: 4,
					column: 18
				},
				end: {
					line: 4,
					column: 56
				}
			},
			'2': {
				start: {
					line: 6,
					column: 17
				},
				end: {
					line: 8,
					column: 2
				}
			},
			'3': {
				start: {
					line: 7,
					column: 2
				},
				end: {
					line: 7,
					column: 28
				}
			},
			'4': {
				start: {
					line: 10,
					column: 18
				},
				end: {
					line: 12,
					column: 2
				}
			},
			'5': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 33
				}
			},
			'6': {
				start: {
					line: 14,
					column: 17
				},
				end: {
					line: 16,
					column: 5
				}
			},
			'7': {
				start: {
					line: 15,
					column: 8
				},
				end: {
					line: 15,
					column: 67
				}
			},
			'8': {
				start: {
					line: 18,
					column: 14
				},
				end: {
					line: 20,
					column: 2
				}
			},
			'9': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 45
				}
			},
			'10': {
				start: {
					line: 22,
					column: 4
				},
				end: {
					line: 27,
					column: 6
				}
			},
			'11': {
				start: {
					line: 31,
					column: 0
				},
				end: {
					line: 31,
					column: 76
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 2,
						column: 27
					},
					end: {
						line: 2,
						column: 28
					}
				},
				loc: {
					start: {
						line: 2,
						column: 43
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
						line: 6,
						column: 17
					},
					end: {
						line: 6,
						column: 18
					}
				},
				loc: {
					start: {
						line: 6,
						column: 27
					},
					end: {
						line: 8,
						column: 2
					}
				}
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 10,
						column: 18
					},
					end: {
						line: 10,
						column: 19
					}
				},
				loc: {
					start: {
						line: 10,
						column: 31
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
						line: 14,
						column: 17
					},
					end: {
						line: 14,
						column: 18
					}
				},
				loc: {
					start: {
						line: 14,
						column: 40
					},
					end: {
						line: 16,
						column: 5
					}
				}
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 18,
						column: 14
					},
					end: {
						line: 18,
						column: 15
					}
				},
				loc: {
					start: {
						line: 18,
						column: 38
					},
					end: {
						line: 20,
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
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0
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

++cov_vjibou8db.s[0];

var organisationsService = function organisationsService($http) {
	++cov_vjibou8db.f[0];


	var apiBase = (++cov_vjibou8db.s[1], 'http://localhost:7203/organisations/');

	++cov_vjibou8db.s[2];
	var getAll = function getAll() {
		++cov_vjibou8db.f[1];
		++cov_vjibou8db.s[3];

		return $http.get(apiBase);
	};

	++cov_vjibou8db.s[4];
	var getById = function getById(id) {
		++cov_vjibou8db.f[2];
		++cov_vjibou8db.s[5];

		return $http.get(apiBase + id);
	};

	++cov_vjibou8db.s[6];
	var modify = function modify(organisation) {
		++cov_vjibou8db.f[3];
		++cov_vjibou8db.s[7];

		return $http.put(apiBase + organisation._id, organisation);
	};

	++cov_vjibou8db.s[8];
	var del = function del(organisation) {
		++cov_vjibou8db.f[4];
		++cov_vjibou8db.s[9];

		return $http.delete(apiBase, organisation);
	};

	++cov_vjibou8db.s[10];
	return {
		GetAll: getAll,
		GetById: getById,
		Modify: modify,
		Delete: del
	};
};

++cov_vjibou8db.s[11];
angular.module('app').factory('organisationsService', organisationsService);