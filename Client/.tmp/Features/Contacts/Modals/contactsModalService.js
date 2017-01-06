'use strict';

var cov_2351gp6cyx = function () {
	var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\contactsModalService.js',
	    hash = '0a1bbb8648a414c458fd10b141259b9fa0751c91',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Contacts\\Modals\\contactsModalService.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 28
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
					column: 17
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
						column: 28
					},
					end: {
						line: 2,
						column: 29
					}
				},
				loc: {
					start: {
						line: 2,
						column: 47
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
						column: 10
					},
					end: {
						line: 10,
						column: 11
					}
				},
				loc: {
					start: {
						line: 10,
						column: 22
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
						column: 31
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
						column: 10
					},
					end: {
						line: 24,
						column: 11
					}
				},
				loc: {
					start: {
						line: 24,
						column: 22
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

++cov_2351gp6cyx.s[0];

var contactsModalService = function contactsModalService($uibModal) {
	++cov_2351gp6cyx.f[0];
	++cov_2351gp6cyx.s[1];


	var add = function add() {
		++cov_2351gp6cyx.f[1];
		++cov_2351gp6cyx.s[2];

		return $uibModal.open({
			templateUrl: 'modifyContactModalControllerTemplate.html',
			controller: 'modifyContactModalController',
			controllerAs: "vm",
			resolve: {
				contact: function contact() {
					++cov_2351gp6cyx.f[2];
					++cov_2351gp6cyx.s[3];

					return null;
				}
			}
		});
	};

	++cov_2351gp6cyx.s[4];
	var modify = function modify(_contact) {
		++cov_2351gp6cyx.f[3];
		++cov_2351gp6cyx.s[5];

		return $uibModal.open({
			templateUrl: 'modifyContactModalControllerTemplate.html',
			controller: 'modifyContactModalController',
			controllerAs: 'vm',
			resolve: {
				contact: function contact() {
					++cov_2351gp6cyx.f[4];
					++cov_2351gp6cyx.s[6];

					return _contact;
				}
			}
		});
	};
	++cov_2351gp6cyx.s[7];
	return {
		Add: add,
		Modify: modify
	};
};
++cov_2351gp6cyx.s[8];
angular.module("app").factory("contactsModalService", contactsModalService);