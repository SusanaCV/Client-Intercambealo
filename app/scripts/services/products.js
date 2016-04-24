'use strict';

/**
 * @ngdoc service
 * @name projectApp.products
 * @description
 * # products
 * Service in the projectApp.
 */
angular.module('projectApp')
  .factory('Products', function ($resource) {
    return $resource('http://localhost:3000/products/:id');
  });
