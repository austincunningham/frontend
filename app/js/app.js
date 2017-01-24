var app = angular.module('FrontendApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html'
        })
        .when('/find', {
            //controller: 'FindController',
            templateUrl: './views/find.html'
        })
        .when('/create', {
            //controller: 'UpdateController',
            templateUrl: './views/create.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
