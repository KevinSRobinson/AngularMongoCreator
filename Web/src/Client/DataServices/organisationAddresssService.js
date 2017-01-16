		
var organisationAddresssService = function($http, apiBase) {
	
    apiBase += "/organisationAddresss";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
        return $http.put(apiBase + reallAllForCurrentUser);
    };    

    var modify = function(organisationAddress) {
		if(hourRecord._id){
			return $http.put(apiBase + organisationAddress._id, organisationAddress);
		}
		return $http.post(apiBase, organisationAddress);        
    };

  
    var del = function( organisationAddress) {
		return $http.delete(apiBase, organisationAddress);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del,
        GetAllForCurrentUser: getAllForCurrentUser
    };
};
	

angular.module('app').factory('organisationAddresssService', organisationAddresssService);
