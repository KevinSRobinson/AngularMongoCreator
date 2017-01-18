		
var contactsService = function($resource, $http, apiBase) {
	
    apiBase += "/contacts";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};
    
    var getAllForCurrentUser = function() {
		console.log(apiBase + '/readAllForCurrentUser');
        return $resource(apiBase + '/readAllForCurrentUser').query().$promise;
    };    

    var modify = function(contact) {
		if(contact._id){
			return $http.put(apiBase + contact._id, contact);
		}
		return $http.post(apiBase, contact);        
    };

  
    var del = function( contact) {
		return $http.delete(apiBase, contact);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del,
        GetAllForCurrentUser: getAllForCurrentUser
    };
};

contactsService.$inject = ['$resource', '$http', 'apiBase'];	

angular.module('app').factory('contactsService', contactsService);
