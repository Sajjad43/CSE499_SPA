angular.module('cricket')
.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
     
    .state('match',{
        url:'/match',
        views:{
            'header':{
                    templateUrl:'views/header.html'
                },
            'content':{
                templateUrl:'views/match.html',
                controller:'mapMatch'
                },
            'info@match':{
                templateUrl:'views/match/info.html'
            },
            'graph@match':{
                templateUrl:'views/match/match_bat_1.html',
                controller:'match_bat_1'
            }
        }
    })
    
    
})
       
   