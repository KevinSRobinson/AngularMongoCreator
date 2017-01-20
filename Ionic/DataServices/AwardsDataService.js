var AwardsDataService = function($resource, $http, apiBase) {
	
    apiBase += "/Awards";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
        return $http.get(apiBase + '/readAllForCurrentUser');
    };    

    var modify = function(awards) {
		if(awards._id){
			return $http.put(apiBase + awards._id, awards);
		}
		return $http.post(apiBase, awards);        
    };
  
    var del = function( awards) {
		return $http.delete(apiBase, awards);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del,
        GetAllForCurrentUser: getAllForCurrentUser
    };
};

angular.module("app").service("AwardsDataService", AwardsDataService);
