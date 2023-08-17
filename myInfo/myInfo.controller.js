angular.module("name").controller("myInfo", function($scope,signUpservice){
    $scope.out=signUpservice.getInfo();
    $scope.show=false;
    $scope.myInfo={};

    if($scope.out===undefined){
        $scope.sign="Not Signed Up Yet.";
    }
    else{
    $scope.show=true;
        $scope.firstname=$scope.out[0].firstname;
        $scope.lastname=$scope.out[1].lastname;
        $scope.email=$scope.out[2].email;
        $scope.phoneNumber=$scope.out[3].phoneNumber;
        $scope.menuNumber=$scope.out[4].menuNumber;
        $scope.name=$scope.out[5].name;
        $scope.description=$scope.out[6].Description;
    }
    
})