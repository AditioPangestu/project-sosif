var toDoListApp = angular.module('toDoListApp',[]);

toDoListApp.controller('toDoListController',['$scope', function($scope){
    
    addToDo(){
        $scope.toDoList.push ({
            judul : $scope.newToDO.judul,
            deskripsi : $scope.newToDO.deskripsi,
            tglMulai : "01/04/2017",
            tglSelesai : "20/04/2017",
            prioritas : "tinggi",
            sudahDilakukan : false
        });
    }
    
    $scope.toDoList = [
        {
            judul : "Membuat PR Sister",
            deskripsi : "Implementasi algoritma rifting",
            tglMulai : "01/04/2017",
            tglSelesai : "20/04/2017",
            prioritas : "tinggi",
            sudahDilakukan : false
        },
        {
            judul : "Membuat PR PBD",
            deskripsi : "Membuat subsistem android",
            tglMulai : "19/04/2017",
            tglSelesai : "26/04/2017",
            prioritas : "Sedang",
            sudahDilakukan : false
        },
        {
            judul : "Belajar Angular JS",
            deskripsi : "Buka website dokumentasi angular js",
            tglMulai : "21/04/2017",
            tglSelesai : "26/04/2017",
            prioritas : "Rendah",
            sudahDilakukan : false
        }
    ];
    
}]);