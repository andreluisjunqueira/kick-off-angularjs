angular.module('todoApp').provider('geradorSerial',function(){


    var tamanho = 5;

    this.setTamanhoSerial = function(novoTamanho){
        
        if( novoTamanho )
            tamanho = novoTamanho

    }

    this.$get = function(){

        function _gerar (){
            var serial="";
            while(serial.length < tamanho){
                serial+= String.fromCharCode(Math.floor(Math.random() * 64) + 32);
            }
            return serial;
        }

        return{
            gerar : _gerar
        }

    }

});