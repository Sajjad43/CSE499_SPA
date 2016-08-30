angular.module('cricket')
.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
     .state('player',{
            url:'/player',
            views:{
                'header':{
                    templateUrl:'views/header.html',
                },
                'content@':{
                    templateUrl:'views/player.html',
                },
                'info@player':{
                   template:'<center><h3>Select a player from the list</h3></center>'
                },
                'graphBlock@player':{
                    template:"<center><h4>No records</h4></center>"
                },
                'playerList@player':{
                    templateUrl:'views/player/playerList.html',
                    controller:'playerList'
                }
            }  
    })
    
    
    .state('player.playerList',{
        url:'/:player',
        views:{
             'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
             'graphBlock@player':{
                    templateUrl:'views/player/graph.html'
                },
             'graph@player.playerList':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
            }
        }
    })
    
    
    .state('player.playerList.performance',{
        url:'/:id',
        views:{
            'graph@player.playerList':{
                templateUrl:function($stateParams){
                    if($stateParams.id<=2){
                        return 'views/player/player_bat_'+$stateParams.id+'.html'
                    }
                    else{
                        return 'views/player/player_bowl_'+($stateParams.id-2)+'.html';
                    }
                },
                controller:function($stateParams){
                     if($stateParams.id<=2)
                        return 'player_bat_'+$stateParams.id;
                    
                    else
                        return 'player_bowl_'+($stateParams.id-2);
                }
            }
        }
        
    })
    
})
     