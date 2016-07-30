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
    /*---*/
    .state('match.bat_1',{
        url:'/:id',
       
        views:{
            
            'graph@match':{
                templateUrl:'views/match/match_bat_1.html',
                controller:'match_bat_1'
            },
            
        }
    })
    .state('match.bat_2',{
        url:'/:id',
        views:{
            'graph@match':{
                templateUrl:'views/match/match_bat_2.html',
                controller:'match_bat_2'
            },
        }
    })
    .state('match.bat_3',{
        url:'/:id',
        views:{
            'graph@match':{
                templateUrl:'views/match/match_bat_3.html',
                controller:'match_bat_3'
            }
        }
    })
    .state('match.bowl_1',{
        url:'/:id',
        views:{
            'graph@match':{
                templateUrl:'views/match/match_bowl_1.html',
                controller:'match_bowl_1'
            }
        }
    })
    .state('match.bowl_2',{
        url:'/:id',
        views:{
            'graph@match':{
                templateUrl:'views/match/match_bowl_2.html',
                controller:'match_bowl_2'
            }
          
        }
    })
    .state('match.bowl_3',{
        url:'/:id',
        views:{
            'graph@match':{
                templateUrl:'views/match/match_bowl_3.html',
                controller:'match_bowl_3'
            }
        }
    })
    
})
       
   