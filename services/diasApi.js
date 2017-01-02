angular.module('todoApp').service('diaApi',function($http,urlapp){

    var _getDias = function(){
        return $http.get(urlapp.baseUrl+'dias');
    }
    this.getDias = _getDias;
});
