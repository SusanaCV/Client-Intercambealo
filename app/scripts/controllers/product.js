'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ProductCtrl', function ($scope, Products) {
    $scope.products = Products.query(function() {
      console.log('I am done loading products...');
    }, function(error) {
      console.log('There was an error loading', error.statusText);
    });


    $scope.deleteProduct = function(id) {
      Products.delete({'id': id});
      $scope.products = $scope.products.splice(1);
    };

    $scope.newProduct = function() {
      /*alert($scope.name);*/

      Products.save({'name':$scope.name, 'description':$scope.descrip});      

    };
    $scope.upDateProduct = function() {
      /*alert($scope.name);*/

      Products.save({'name':$scope.name, 'description':$scope.descrip});      

    };
  });
