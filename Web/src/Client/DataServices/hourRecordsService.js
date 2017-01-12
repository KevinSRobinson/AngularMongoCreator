		
var hourRecordsService = function($http) {
	
    var apiBase = 'http://localhost:7203/hourRecords/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(hourRecord) {
        return $http.put(apiBase + hourRecord._id, hourRecord);
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
