angular.module('cricket')
.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
     
    
    
     .state('player',{
           url:'/player',
            views:{
                'header':{
                    templateUrl:'views/header.html',
                },
                'content':{
                    templateUrl:'views/player.html',
                },
                'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@player':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
                }
            }  
    })
    .state('player.player_bat_1',{
           url:'/1',
            views:{
               
                'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@player':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
                }
            }  
    })
    .state('player.player_bat_2',{
           url:'/2',
            views:{
               
                'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@player':{
                    templateUrl:'views/player/player_bat_2.html',
                    controller:'player_bat_2'
                }
            }  
    })
    .state('player.player_bowl_1',{
           url:'/3',
            views:{
               
                'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@player':{
                    templateUrl:'views/player/player_bowl_1.html',
                    controller:'player_bowl_1'
                }
            }  
    })
    
   
    
    
})
     