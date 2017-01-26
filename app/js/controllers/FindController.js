/**
 * Created by austin on 24/01/2017.
 */
app.controller('FindController', function ($scope, $http) {
    /*$scope.firstName = 'First Name';
    $scope.lastName = 'Last Name';
    $scope.email = 'Email';*/
    var id = $scope._id;

    $scope.FindUser = function () {
        $http.get('http://localhost:8000/users/'+ id)
            .success(function(data) {
                $scope.firstName = data.name.first;
                $scope.lastName = data.name.last;
                $scope.email = data.email;
                return data;
            })
            .error(function(err){
                return err;
            });

    };

    $scope.UpdateData = function() {

        $http.put('http://localhost:8000/users/'+id, data )
            .success(function(data) {

            });
    }

});
