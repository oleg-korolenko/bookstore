// 1. create our the entry point of our application
(function(){
var module=angular.module("bookstore",['ngRoute']);
// 2. Bootstrap our application
// 2.a Using directive ng-app

// 2.b Programmatically

//angular.bootstrap(document.body,['bookstore']);

// ROUTES
module.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/books.html',
            controller: 'BookController'
        })
        .when('/books/add',{
          templateUrl: 'templates/add-book.html',
          controller: 'BookController'
        })
        .when('/books/:id',{
          templateUrl: 'templates/book-details.html',
          controller: 'BookController'
        })
        .otherwise({redirectTo: '/'});
});
})();
