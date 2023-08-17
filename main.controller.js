angular.module("name").controller("control" ,['$scope','$location' , function($scope,$location){
    $scope.gotoPage = function(link){
        $location.path(link);
    }
}])