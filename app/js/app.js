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
        .when('/delete', {
            //controller: 'FindController',
            templateUrl: './views/delete.html'
        })
        .when('/create', {
            controller: 'CreateController',
            templateUrl: './views/create.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
