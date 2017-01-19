var OrganisationDataService = function($resource, $http, apiBase) {
	
    apiBase += "/Organisation";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
        return $http.get(apiBase + '/readAllForCurrentUser');
    };    

    var modify = function("/organisation") {
		if(organisation._id){
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
	    Delete : del,
        GetAllForCurrentUser: getAllForCurrentUser
    };
};
