(function(){
    angular.module('BookList').
        config(BookListRoute);

    BookListRoute.$inject = ['$routeProvider'];

    function BookListRoute($routeProvider){
        $routeProvider.when('/' , {
            controller : 'BookListController',
            controllerAs : 'vm',
            resolve : {
                booksListResolver : function ($q) {
                    var defer = $q.defer();
                    defer.resolve();
                    console.log(defer);
                    return defer.promise;
                }
            }
        });
    }
})();