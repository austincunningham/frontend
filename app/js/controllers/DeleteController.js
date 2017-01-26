/**
 * Created by austin on 24/01/2017.
 */
app.controller('DeleteController', function($scope, $http) {
    var data;
    $scope.reload = function () {
        $http.get('http://localhost:8000/users/')
            .success(function(data){
               $scope.allusers = data;
            });
    };
    $scope.reload();
    $scope.DeleteUser = function () {
        data = $scope.id ;

        $http.delete('http://localhost:8000/users/'+ data)
            .success(function(data) {
                //$scope.PostDataResponse = data.name.first +" "+ data.name.last + " was created";
                //data = {}
                $scope.reload();
                return data;
            })
            .error(function(err){
                return err;
            });
    };
});