		
var awardssService = function($http, apiBase) {
	
    apiBase += "/awardss/";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(awards) {
        return $http.put(apiBase + awards._id, awards);
    };    

    var modify = function(awards) {
		if(hourRecord._id){
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
	    Delete : del
    };
};
	

angular.module('app').factory('awardssService', awardssService);
