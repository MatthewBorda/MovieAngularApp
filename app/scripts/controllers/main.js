'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, moviesearch) {
//     $scope.current = current.query();
//   $scope.refreshCurrent = function(){
//         $scope.current = current.query({
//             movieSearch: $scope.movieName       });
//     };
      $scope.moviesearch = moviesearch.find();

    $scope.findMovies = function(){
        $scope.moviesFound = moviesearch.find({
            query: $scope.movieSearch
        });
        $scope.searchQuery = $scope.movieSearch;
    };
  });
