		
var contactsService = function($http) {
	
    var apiBase = 'http://localhost:7208/contacts/';

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(contact) {
        return $http.put(apiBase + contact._id, contact);
    };    

    var del = function( contact) {
		return $http.delete(apiBase, contact);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('app').factory('contactsService', contactsService);
