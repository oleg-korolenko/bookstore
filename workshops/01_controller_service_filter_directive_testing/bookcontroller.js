(function(){
  'use strict';
  BookController.$inject=['$scope','BookService','$routeParams'];
  function BookController($scope,BookService,$routeParams){
    $scope.model={};
    BookService.getBooks().then(function(response){
          $scope.model.books = response.data;
    });
  }
  angular.module('bookstore').controller('BookController',BookController);
})();
