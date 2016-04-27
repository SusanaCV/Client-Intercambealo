'use strict';

/**
 * @ngdoc service
 * @name projectApp.users
 * @description
 * # users
 * Service in the projectApp.
 */
angular.module('projectApp')
  .factory('Users', function ($resource) {
    return $resource('http://localhost:3000/users/:id');
  });
