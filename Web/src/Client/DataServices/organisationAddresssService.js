		
var organisationAddresssService = function($http) {
	
    var apiBase = 'http://localhost:7203/organisationAddresss/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(organisationAddress) {
        return $http.put(apiBase + organisationAddress._id, organisationAddress);
    };    

    var del = function( organisationAddress) {
		return $http.delete(apiBase, organisationAddress);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('organisationAddresssService', organisationAddresssService);
