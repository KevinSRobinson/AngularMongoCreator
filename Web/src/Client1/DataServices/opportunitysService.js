var opportunitysService = function($resource, $http, apiBase) {
	
    apiBase += "/opportunitys";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
        return $http.get(apiBase + '/readAllForCurrentUser');
    };    

    var modify = function(opportunity) {
		if(opportunity._id){
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

opportunitysService.$inject = ['$resource', '$http', 'apiBase'];	

angular.module('app')
.factory('opportunitysService', opportunitysService);
