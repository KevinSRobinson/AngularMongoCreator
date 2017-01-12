		
var organisationsService = function($http, apiBase) {
	
    apiBase += "/organisations/";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(organisation) {
        return $http.put(apiBase + organisation._id, organisation);
    };    

    var modify = function(organisation) {
		if(hourRecord._id){
			return $http.put(apiBase + organisation._id, organisation);
		}
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
