var app = angular.module('FrontendApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/find', {
            //controller: 'FindController',
            templateUrl: './views/find.html'
        })
        .when('/update', {
            //controller: 'UpdateController',
            templateUrl: 'views/update.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
