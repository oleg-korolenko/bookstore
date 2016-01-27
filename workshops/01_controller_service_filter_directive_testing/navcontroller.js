(function(){
  'use strict';

  NavController.$inject=['$scope'];

  function NavController($scope){
    $scope.title="Bookstore";
  }
  angular.module('bookstore').controller('NavController',NavController);
})();
