angular.module('todoApp').config(function($routeProvider){

$routeProvider.when('/',{
        templateUrl:"./templates/home.html"

}).when('/novo',{
        templateUrl:"./templates/criar.html"
})   

    $routeProvider.otherwise({redirectTo:'/'})
});