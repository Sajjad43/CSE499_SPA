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
                template:"<center><h3>Select the teams,Click on the blue buttom on the left</h3></center>"
                
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
                templateUrl:'views/match/match_list.html',
                //controller:'' //add the controller    
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
               
            }
          
        }
    })
    
    .state('match.selectMatch.matchList.performance',{
               
        url:'/:id',
        views:{
               
            'graph@match.selectMatch.matchList' :{
                 
                templateUrl:function($stateParams){
                    if($stateParams.id<=3)                   
                        return 'views/match/match_bat_'+$stateParams.id+'.html';
                     else
                         return 'views/match/match_bowl_'+($stateParams.id-3)+'.html'; 
                }
            }  
        }
    })
    
})
       
   