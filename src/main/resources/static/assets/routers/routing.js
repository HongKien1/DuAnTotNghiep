var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../../templates/user/index.html',
            controller: 'HomeController'
        })
        .when('/home', {
            templateUrl: '../../../templates/user/dashboard.html',
            controller: ''
        })
        .when('/about', {
            templateUrl: 'user/dashboard.html',
            controller: ''
        })
        .otherwise({ redirectTo: '/' });

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
});