		
var organisationsService = function($http) {
	
    var apiBase = 'http://localhost:7203/organisations/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(organisation) {
        return $http.post(apiBase, organisation);
    };    

    var del = function( organisation) {
		return $http.delete(apiBase, organisation);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('organisationsService', organisationsService);
