// Code goes here

(function() {
  angular.module("myApp", ['zippy-directive'])

      .controller("mainController", ['$scope', function($scope) {

        $scope.name = "test";

      }])

})();