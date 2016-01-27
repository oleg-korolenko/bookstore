(function(){
  'use strict';
  BookService.$inject=['$http'];

  function BookService($http){
    return {
      getBooks : function(){
        return  $http.get('http://127.0.0.1:9000/api/books');
      },
      getBook : function(id){
        return  $http.get('http://127.0.0.1:9000/api/books/'+id);
      },
      deleteBook : function(id){
        for(var i=0;i<books.length;i++){
          if(books[i].bookID==id){
            books.splice(i,1);
          }
        }
      }
    }
  }
  angular.module('bookstore').service('BookService',BookService);
})();
