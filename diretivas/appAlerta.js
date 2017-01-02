angular.module('todoApp').directive('appAlerta',function(){



    return{
        restrict:'AE',
        templateUrl : './templates/appAlerta.html',
        scope:{
            titulo:"@"
        },
        transclude:true

    }

});