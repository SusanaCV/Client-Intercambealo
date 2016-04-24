'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ProductCtrl', function () {
    $scope.products = Products.query(function() {
      console.log('I am done loading products...');
    }, function(error) {
      console.log('There was an error loading', error.statusText);
    });


    $scope.deleteProduct = function(id) {
      debugger;
      Products.delete({'id': id});
      $scope.products = $scope.products.splice(1);
    };
  });
