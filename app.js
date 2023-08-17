angular.module("name",['ngRoute'])

angular.module("name").config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/signUp', {
            service : 'signUpservice',
            controller : 'SignUp',
            templateUrl : 'signUp/signUp.html'
        })
        .when('/myInfo', {
            controller : 'myInfo',
            templateUrl : "myInfo/myInfo.html"
        })
        .otherwise('/');
}])