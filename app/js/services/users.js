app.factory('users', ['$http', function($http) {
    return $http.get('http://localhost:8000/users/')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);