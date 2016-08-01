angular.module('cricket')
.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
     
    .state('match',{
        url:'/match',
        views:{
            'header':{
                    templateUrl:'views/header.html'
                },
            'content@':{
                templateUrl:'views/match.html',
                controller:'mapMatch'
                },
            'map@match':{
                templateUrl:'views/match/map.html',
                controller:'mapMatch'
            },  
            'info@match':{
                templateUrl:'views/match/match_info.html',
                controller:'match_info'
                
            },
            'graphBlock@match':{
                template:'<center><h3>Select a match</h3></center>'
            }
           
        }
    })
    
    .state('match.selectMatch',{
        
        views:{ 
            
            'map@match':{
                templateUrl:'views/match/map.html',
                controller:'mapMatch'
            },  
            'info@match':{
                template:"<center><h3>Select a match</h3></center>"    

                },
            'matchList@match':{
                templateUrl:'views/match/match_list.html'
            }    
        }
    })
      .state('match.selectMatch.matchList',{
        url:'/:match',
        views:{ 
             
            'info@match':{
                templateUrl:'views/match/match_info.html',
                controller:'match_info'
            },
            'graphBlock@match':{
                templateUrl:'views/match/graph.html',
                controller:'match_info'
            },
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_1.html',
                controller:'match_bat_1'
            }
            
            
             
        }
    })
  
    
    .state('match.selectMatch.matchList.teamTab',{
        url:'/:id',
       
        views:{
            
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_2.html',
                controller:'match_bat_2'
            },
            
        }
    })
   
    .state('match.selectMatch.matchList.bat_1',{
        url:'/:team/:id',
       
        views:{
            
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_1.html',
                controller:'match_bat_1'
            },
            
        }
    })
    .state('match.selectMatch.matchList.bat_2',{
        url:'/:team/:id',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_2.html',
                controller:'match_bat_2'
            },
        }
    })
    .state('match.selectMatch.matchList.bat_3',{
        url:'/:team/:id',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_3.html',
                controller:'match_bat_3'
            }
        }
    })
    .state('match.selectMatch.matchList.bowl_1',{
        url:'/:team/:id',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_1.html',
                controller:'match_bowl_1'
            }
        }
    })
    .state('match.selectMatch.matchList.bowl_2',{
        url:'/:team/:id',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_2.html',
                controller:'match_bowl_2'
            }
          
        }
    })
    .state('match.selectMatch.matchList.bowl_3',{
        url:'/:team/:id',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_3.html',
                controller:'match_bowl_3'
            }
        }
    })
    
})
       
   