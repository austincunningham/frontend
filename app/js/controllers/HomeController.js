/**
 * Created by austin on 26/01/2017.
 */
app.controller('HomeController', function($scope, $http) {

    $scope.reload = function () {
        $http.get('http://localhost:8000/users/')
            .success(function (data) {
                $scope.allusers = data;
            });
    };
    $scope.reload();

    $scope.truefalse = function() {
        var show;
        i++;
        if (i % )
        $scope.show = true;
    };

});