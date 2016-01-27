(function(){
  'use strict';
  BookDetailsController.$inject=['$scope','BookService','$routeParams'];
  function BookDetailsController($scope,BookService,$routeParams){
    $scope.model={};
    
    if($routeParams.id){
        BookService.getBook($routeParams.id).then(function(response){
              $scope.book = response.data;
        });
    }

  }
  angular.module('bookstore').controller('BookDetailsController',BookDetailsController);
})();
