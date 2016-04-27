'use strict';

/**
 * @ngdoc service
 * @name projectApp.dashboard
 * @description
 * # dashboard
 * Service in the projectApp.
 */

angular.module('projectApp')
  .factory('Transactions', function ($resource) {
    return $resource('http://localhost:3000/transactions/:id');
  });

