		
var opportunitysService = function($http, apiBase) {
	
    apiBase += "/opportunitys";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
        return $http.put(apiBase + '/readAllForCurrentUser');
    };    

    var modify = function(opportunity) {
		if(hourRecord._id){
			return $http.put(apiBase + opportunity._id, opportunity);
		}
		return $http.post(apiBase, opportunity);        
    };

  
    var del = function( opportunity) {
		return $http.delete(apiBase, opportunity);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del,
        GetAllForCurrentUser: getAllForCurrentUser
    };
};
	

angular.module('app').factory('opportunitysService', opportunitysService);
