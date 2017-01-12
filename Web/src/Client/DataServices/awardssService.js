		
var awardssService = function($http) {
	
    var apiBase = 'http://localhost:7203/awardss/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(awards) {
        return $http.put(apiBase + awards._id, awards);
    };    

    var del = function( awards) {
		return $http.delete(apiBase, awards);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('awardssService', awardssService);
