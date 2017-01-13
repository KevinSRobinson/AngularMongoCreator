		
var hourRecordsService = function($http, apiBase) {
	
    apiBase += "/hourRecords";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(hourRecord) {
        return $http.put(apiBase + hourRecord._id, hourRecord);
    };    

    var modify = function(hourRecord) {
		if(hourRecord._id){
			return $http.put(apiBase + hourRecord._id, hourRecord);
		}
		return $http.post(apiBase, hourRecord);        
    };

  
    var del = function( hourRecord) {
		return $http.delete(apiBase, hourRecord);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('hourRecordsService', hourRecordsService);
