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
      debugger;
      Users.delete({'id': id});
      $scope.users = $scope.users.splice(1);
    };

    /*
    $scope.newProduct = function(id) {
      debugger;
      Products.save({'username':username, 'username':password, 'username':firsname});      

    };
    */
  });