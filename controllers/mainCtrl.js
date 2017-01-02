angular.module('todoApp').controller('mainCtrl',function($scope,$filter,$http,todoApi,diaApi,geradorSerial,$location){
            $scope.todos = [];
            $scope.erro = false;
            
            $scope.alterarPagina = function(caminho){
                $location.path(caminho);
            }


            todoApi.getTodos.then(function(res){
                $scope.todos = res.data;
            },function(error){
                $scope.erro = "Aconteceu um erro";
                console.log("CAIU NO ERRO",error);
            });

            var nomeApp = "Todo app";
            $scope.app = $filter('uppercase')(nomeApp);

/*
            $scope.todos = [
                {afazer:'Reunião',quando:'Quarta'},
                {afazer:'Lavar o carro',quando:'Terça'},
                {afazer:'Tozar cachorro',quando:'Quinta'}
            ];
*/
        $scope.novaTarefa = function(tarefas){

             todoApi.saveTodo(tarefas).then(function(res){
                 console.log(res)
                  $scope.alterarPagina('/');
             });
            $scope.todos.push(angular.copy(tarefas) ) ;
            delete $scope.tarefas;
        };

        diaApi.getDias().then(function(res){
            $scope.diasdasemana = res.data;
        });
        /*
        $scope.diasdasemana = [
            {nome:"Segunda-feira", abrev:"Seg",semana:"meio de semana"},
            {nome:"Terça-feira", abrev:"Ter",semana:"meio de semana"},
            {nome:"Quarta-feira", abrev:"Qua",semana:"meio de semana"},
            {nome:"Quinta-feira", abrev:"Qui",semana:"meio de semana"},
            {nome:"Sexta-feira", abrev:"Sex",semana:"meio de semana"},
            {nome:"Sabado", abrev:"Sab",semana:"fim semana"},
            {nome:"Domingo", abrev:"Dom",semana:"fim semana"},
        ];
        */

        $scope.excluirTarefa = function(tarefas){

            var naoExcluidas = tarefas.filter(function(tarefa){
                    if(!tarefa.concluida){
                        return tarefa;
                    }
            });
            $scope.todos = naoExcluidas;
            console.log(naoExcluidas);

        }

        $scope.desabilitar = function(tarefas){
            
            var desabilitar = tarefas.some(function(tarefa){
                return tarefa.concluida;
            });
            return desabilitar;
        }

        console.log( geradorSerial.gerar() );



    });