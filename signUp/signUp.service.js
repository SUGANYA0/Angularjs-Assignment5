angular.module("name").service("signUpservice",function(){
    this.setInfo=function(value){
        this.info=value;
    }
    this.getInfo=function(){
        return this.info;
    }
})