angular.module('todoApp').factory('todoApi',function($http,urlapp){

        var _getTodos = $http.get(urlapp.baseUrl+'todos');

        var _saveTodo = function(tarefas){
            return $http.post(urlapp.baseUrl+'todos',tarefas);
        }

        return {
            getTodos : _getTodos,
            saveTodo : _saveTodo
        }
});