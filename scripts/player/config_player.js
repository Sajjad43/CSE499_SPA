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
                    templateUrl:'views/player/playerList.html'
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
    
    
    .state('player.playerList.player_bat_1',{
           url:'/1',
            views:{
              
                'graph@player.playerList':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
                }
            }  
    })
    .state('player.playerList.player_bat_2',{
           url:'/2',
            views:{
               
                'graph@player.playerList':{
                    templateUrl:'views/player/player_bat_2.html',
                    controller:'player_bat_2'
                }
            }  
    })
    .state('player.playerList.player_bowl_1',{
           url:'/3',
            views:{
                'graph@player.playerList':{
                    templateUrl:'views/player/player_bowl_1.html',
                    controller:'player_bowl_1'
                }
            }  
    })
    
})
     