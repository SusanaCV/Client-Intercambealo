'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the projectApp
 */

angular.module('projectApp')
  .controller('DashboardCtrl', function ($scope, Transactions) {
    $scope.transactions = Transactions.query(function() {
      console.log('I am done loading Transactions...');
    }, function(error) {
      console.log('There was an error loading', error.statusText);
    });


    $scope.deleteTransaction = function(id) {
      debugger;
      Transactions.delete({'id': id});
      $scope.transactions = $scope.transactions.splice(1);
    };
  });
