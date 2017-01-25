/**
 * Created by austin on 24/01/2017.
 */
app.controller('DeleteController', function($scope, $http) {
    $scope.DeleteUser = function () {
        //$.param jQuery function to serialize data to JSON
        var data = id;

        $http.delete('http://localhost:8000/users/'+ data)
            .success(function(data) {
                //$scope.PostDataResponse = data.name.first +" "+ data.name.last + " was created";
                //data = {};
                return data;
            })
            .error(function(err){
                return err;
            });
    };
});