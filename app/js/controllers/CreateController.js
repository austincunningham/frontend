/**
 * Created by austin on 24/01/2017.
 */
app.controller('CreateController', function($scope, $http) {
    $scope.SendData = function () {
        var data = {
            name:{
                first: $scope.firstName,
                last: $scope.lastName
            },
            email: $scope.email

        };

        $http.post('http://localhost:8000/users/', data)
            .success(function(data) {
                $scope.PostDataResponse = data.name.first +" "+ data.name.last + " was created";
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.email = '';

                return data;
            })
            .error(function(err){
                return err;
            });
    };
});
