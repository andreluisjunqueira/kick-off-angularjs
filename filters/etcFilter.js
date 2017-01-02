angular.module('todoApp').filter('etc',function(){


    return function(input ,tamanho){

        if(input)
            input = input.substr(0, tamanho || 3)+'...';
        
        return input;

    }

})