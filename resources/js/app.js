var toDoListApp = angular.module('toDoListApp',[]);

toDoListApp.controller('toDoListController',['$scope', function($scope){
    
    $scope.selectedToDo;
    $scope.showEdit = false;
    
    $scope.editable = function(todo){
        $scope.selectedToDo = todo;
        $scope.showEdit = true;
    }
    
    $scope.addToDo = function(){
        $scope.toDoList.push ({
            judul : $scope.newToDo.judul,
            deskripsi : $scope.newToDo.deskripsi,
            tglMulai : $scope.newToDo.tglMulai,
            tglSelesai : $scope.newToDo.tglSelesai,
            prioritas : $scope.newToDo.prioritas,
            sudahDilakukan : false
        });
        $scope.newToDo.judul,
            $scope.newToDo.judul="";
            $scope.newToDo.deskripsi="";
            $scope.newToDo.tglMulai="";
            $scope.newToDo.tglSelesai="";
            $scope.newToDo.prioritas="";
    }
    
    $scope.removeToDo = function(todo){
        var removedToDo = $scope.toDoList.indexOf(todo);
        $scope.toDoList.splice(removedToDo,1);
    }
    
    $scope.toDoList = [
        {
            judul : "Membuat PR Sister",
            deskripsi : "Implementasi algoritma rifting",
            tglMulai : new Date(2017,4,1),
            tglSelesai : new Date(2017,4,19),
            prioritas : "tinggi",
            sudahDilakukan : false
        },
        {
            judul : "Membuat PR PBD",
            deskripsi : "Membuat subsistem android",
            tglMulai : new Date(2017,4,19),
            tglSelesai : new Date(2017,4,26),
            prioritas : "Sedang",
            sudahDilakukan : false
        },
        {
            judul : "Belajar Angular JS",
            deskripsi : "Buka website dokumentasi angular js",
            tglMulai : new Date(2017,4,23),
            tglSelesai : new Date(2017,4,26),
            prioritas : "Rendah",
            sudahDilakukan : false
        }
    ];
    
}]);