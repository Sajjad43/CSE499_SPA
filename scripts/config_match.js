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
                templateUrl:'views/match/match_info.html',
                controller:'match_info'
                
            },
            'graph@match':{
                templateUrl:'views/match/match_bat_1.html',
                controller:'match_bat_1'
            },
            'graph-info@match':{
                templateUrl:'views/match/graph_title.html',
                controller:'graph_info'
            }
           
        }
    })
  
    
    .state('match.teamTab',{
        url:'/:id',
       
        views:{
            
            'graph@match':{
                templateUrl:'views/match/match_bat_2.html',
                controller:'match_bat_2'
            },
            'graph-info@match':{
                templateUrl:'views/match/graph_title.html',
                controller:'graph_info'
            }
        }
    })
    
})
       
   