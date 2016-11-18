(function(){
    'use strict';

    angular.module('BookList')
        .factory('BookListFactory' , BookListFactory);

    BookListFactory.$inject = ['$q','$http'];

    function BookListFactory($q,$http) {
        var data=null;
        return {
            getBooksList : function () {
               // console.log('b');
                $http.get('./src/json/books.json').success(function (res) {
                    console.log(res);
                    data = res;
                    return data;
                })

            },
            getBooksArray : function(){
                return data;
            }
        }
    }
})()






