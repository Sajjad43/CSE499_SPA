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
            
            'analytics@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bat_1.html',
               
            }
          
        }
    })
      /*  .state('match.selectMatch.matchList.teamSelect',{
                url:'/:team',
              views:{
                'analytics@match.selectMatch.matchList' : {
                    templateUrl:'views/match/match_bat_2.html',
                   
                   
                }  
              
             }
           
        })*/
    
       
    
    .state('match.selectMatch.matchList.performance',{
               
             url:'/:id',
             views:{
               
                 'analytics@match.selectMatch.matchList' : {
                    templateUrl:function($stateParams){
                       if($stateParams.id<=3)                   
                       {return  'views/match/match_bat_'+$stateParams.id+'.html';}
                        else
                        {return  'views/match/match_bowl_'+($stateParams.id-3)+'.html'; }
                    }
                     
                    
                }  
             }
        
    })
    
   /*   .state('match.selectMatch.matchList.bat_2',{
               url:'/2',
       
               views:{
                
                   'analytics@match.selectMatch.matchList' : {
                    templateUrl:'views/match/match_bat_2.html',
                    controller:'match_bat_2'
                }  
              
             }
        
    })
   .state('match.selectMatch.matchList.bat_3',{
        url:'/3',
        views:{
             'graphBlock@match':{
                templateUrl:'views/match/graph.html',
                controller:'match_info'
            },
            'graph@match.selectMatch.matchList.bat_3':{
                templateUrl:'views/match/match_bat_3.html',
                controller:'match_bat_3'
            }
        }
        
    })
    .state('match.selectMatch.matchList.bowl_1',{
        url:'/4',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_1.html',
                controller:'match_bowl_1'
            }
        }
        
    })
    .state('match.selectMatch.matchList.bowl_2',{
        url:'/5',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_2.html',
                controller:'match_bowl_2'
            }
        }
        
    })
    .state('match.selectMatch.matchList.bowl_3',{
        url:'/6',
        views:{
            'graph@match.selectMatch.matchList':{
                templateUrl:'views/match/match_bowl_3.html',
                controller:'match_bowl_3'
            }
        }
        
    })*/
    
  
   
   
})
       
   