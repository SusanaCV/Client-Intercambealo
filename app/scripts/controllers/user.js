'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('UserCtrl', function ($scope, Users) {
    $scope.users = Users.query(function() {
      console.log('I am done loading users...');
    }, function(error) {
      console.log('There was an error loading', error.statusText);
    });


    $scope.deleteUser = function(id) {
      
      Users.delete({'id': id});
      $scope.users = $scope.users.splice(1);
    };

       $scope.newUser = function() {
       	alert($scope.username, $scope.password);
      Users.save({'username':$scope.username, 'firsname':$scope.firsname, 'password':$scope.password});      
    };
  });