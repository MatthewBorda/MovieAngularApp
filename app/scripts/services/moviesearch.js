'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.current
 * @description
 * # moviesearch
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
.factory('moviesearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:movieSearch', {}, {
      find: {
        method:'GET',
        params:{
          movieSearch: 'Seattle',
          bogus: null
        },
        isArray:false
      }
    });
  });