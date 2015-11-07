'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.getIt = function () {
    $http({
      method: 'GET',
      url: '/app/api/package.json'
    }).then(function successCallback(response) {
      $scope.appName = response.data.name;
    });

    $http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts/1'
    }).then(function successCallback2(response) {
      $scope.cite = response.data.title
    })
  };
      $scope.getIt();
}]);