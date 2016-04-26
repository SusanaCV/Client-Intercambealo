'use strict';

/**
 * @ngdoc service
 * @name projectApp.login
 * @description
 * # login
 * Service in the projectApp.
 */
angular.module('projectApp')
  .factory('Session', function ($resource) {
    return $resource('http://localhost:3000/Session/:id');
  }); 
