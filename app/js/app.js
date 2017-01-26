var app = angular.module('FrontendApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: './views/home.html'
        })
        .when('/find', {
            //controller: 'FindController',
            templateUrl: './views/find.html'
        })
        .when('/delete', {
            controller: 'DeleteController',
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