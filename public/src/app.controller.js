(function(){
    'use strict';

    angular.module('BookList')
        .controller('BookListController', BookListController);

    BookListController.$inject = ['booksListResolver'];

    function BookListController(booksListResolver) {
        booksListResolver.getBooksList();
        console.log('c');
        var vm = this;
        vm.booksArr = [];
        vm.editFlg='';

        vm.books = BookListFactory.getBooksList();
        vm.books.then(function (res) {
            vm.booksArr = res.data;
            for(var i=0;i<vm.booksArr.length;i++){
                vm.booksArr[i].title = vm.alphabetic(vm.booksArr[i].title);
            }

        });
        console.log(vm.books);


        vm.editable = function(id) {
            vm.editFlg = id;
        }

        vm.delete = function(title,item) {
            title = vm.alphabetic(title);
            var answer = confirm('Delete '+title+' ?');
            if(answer){
                vm.booksArr.splice(item,1);
            }else {
                return;
            }
        }

        vm.alphabetic = function (str) {
            var arr = str.split(/[^A-Za-z]/).join(' ').trim();
            return arr;
        }
    }
})();