'use strict';
// Source: app/app.js
angular.module('app', [
    'ngRoute',
    'snap',
    'home']);

/*angular.module('app').constant('MONGOLAB_CONFIG', {
    baseUrl: '/databases/',
    dbName: 'ascrum'
});*/


angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider/*.when('/home', {
        templateUrl:'/home/home.tpl.html',
        controller:'HomeCtrl'
    })*/.otherwise({redirectTo:'/home'});
}]);

angular.module('app').controller('AppCtrl', ['$scope', function($scope) {

}]);

angular.module('app').controller('HeaderCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route) {
        $scope.location = $location;
        // This sets the location path to '/' when the page loads
        // which will fall into the .otherwise specified on the
        // $routeProvider above. Look at angular-app.
        $scope.home = $location.path('/');
    }]);
// Source: app/home/home.js
angular.module('home', []);

angular.module('home').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl:'/home/home.tpl.html',
        controller:'HomeCtrl'
    });
}]);

angular.module('home').controller('HomeCtrl', ['$scope', function($scope) {
    $scope.message = "In the HomeCtrl";
}]);