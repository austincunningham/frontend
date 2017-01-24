/**
 * Created by austin on 24/01/2017.
 */

app.controller('MainController', ['$scope', 'users', function($scope, users) {

    users.success(function(data) {
        $scope.allusers = data;
        console.log(data);
    });
}]);
