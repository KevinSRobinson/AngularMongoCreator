		
var opportunitysService = function($http) {
	
    var apiBase = 'http://localhost:7203/opportunitys/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(opportunity) {
        return $http.put(apiBase + opportunity._id, opportunity);
    };    

    var del = function( opportunity) {
		return $http.delete(apiBase, opportunity);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('opportunitysService', opportunitysService);
