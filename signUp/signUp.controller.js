angular.module("name").controller("SignUp",function($scope,signUpservice,$http){
    $scope.check=function(data){
        $scope.save=undefined,$scope.reply=undefined;
        $scope.firstName={"firstname":document.getElementById("fName").value}
        $scope.lastName={"lastname":document.getElementById("lName").value}
        $scope.email={"email":document.getElementById("email").value}
        $scope.phoneNumber={"phoneNumber":document.getElementById("phn").value}
        $scope.menuNumber={"menuNumber":document.getElementById("menu").value}
        $scope.obj=[];
        $scope.obj.push($scope.firstName);
        $scope.obj.push($scope.lastName);
        $scope.obj.push($scope.email);
        $scope.obj.push($scope.phoneNumber);
        $scope.obj.push($scope.menuNumber);
        if($scope.firstName!="" && $scope.lastName!="" && $scope.email!="" && $scope.phoneNumber!="" && $scope.menuNumber!=""){
            $http.get("menu.json")
            .then(function(response){
                $scope.file=response.data;
                $scope.itemsLength = Object.keys($scope.file).length;

                if(data<=$scope.itemsLength){
                    $scope.name={"name":$scope.file[data]["name"]}
                    $scope.description={"Description":$scope.file[data]["description"]}
                    $scope.obj.push($scope.name);
                    $scope.obj.push($scope.description);
                    $scope.in=signUpservice.setInfo($scope.obj);
                    $scope.save="Your information has been saved"
                }
                else{
                    $scope.reply="No such menu number exists"
                }
            },
            function(error){
                console.error(error)
            }
            )
        }
        else{
            if($scope.firstName==""){
                $scope.fN="Enter FirstName";
            }
            if($scope.lastname==""){
                $scope.ln="Enter lastName";
            }
            if($scope.email==""){
                $scope.e="Enter email";
            }
        }
    }
    $scope.menu=function(data){
        $scope.valid=undefined,$scope.reply=undefined;
        $http.get("menu.json")
        .then(function(response){
            $scope.file=response.data;
            $scope.itemsLength = Object.keys($scope.file).length;

            if(data<=$scope.itemsLength){
                $scope.reply="valid"
            }
            else{
                $scope.reply="No such menu number exists"
            }
        },
        function(error){
            console.error(error)
        }
        )
    }
})