"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}),angular.module("workspaceApp").controller("MainCtrl",function(a,b){a.moviesearch=b.find(),a.findMovies=function(){a.moviesFound=b.find({query:a.movieSearch}),a.searchQuery=a.movieSearch}}),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").factory("current",function(a){return a("http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:movieSearch",{},{query:{method:"GET",params:{movieSearch:"Seattle",bogus:null},isArray:!1}})}),angular.module("workspaceApp").factory("moviesearch",function(a){return a("http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:movieSearch",{},{find:{method:"GET",params:{movieSearch:"Seattle",bogus:null},isArray:!1}})});