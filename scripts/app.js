angular.module('cricket',['ui.router','iso-3166-country-codes'])
 
 .config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
        .state('home',{
            url:'/home',
            views:{
                 'content':{
                     templateUrl:'views/home.html',
                     controller:'home'
                 },
                'header':{
                    templateUrl:'views/header.html'
                }
            }
            
        })
    
    
        .state('home.team',{
            url:'/team/:country',
            views:{
                
                'content@':{
                     templateUrl:'views/team.html',
                     controller:'mapTeam'
                 },
                'info@home.team':{
                    templateUrl:'views/team/info.html',
                    controller:'info'
                },
                'graph@home.team':{
                    templateUrl:'views/team/team_bat_1.html',
                    controller:'team_bat_1'
                }
                
            }
        })
    
         .state('home.team.team_bat_1',{
            url:'/0',
            views:{
               
                'graph@home.team':{
                    templateUrl:'views/team/team_bat_1.html',
                    controller:'team_bat_1'
                }
                
            }
        })
        .state('home.team.team_bat_2',{
            url:'/1',
            views:{
               
                'graph@home.team':{
                    templateUrl:'views/team/team_bat_2.html',
                    controller:'team_bat_2'
                }
                
            }
        })
        .state('home.team.team_bat_3',{
            url:'/2',
            views:{
               
                'graph@home.team':{
                    templateUrl:'views/team/team_bat_3.html',
                    controller:'team_bat_3'
                }
                
            }
        })
        .state('home.team.team_bowl_1',{
            url:'/3',
            views:{
               
                'graph@home.team':{
                    templateUrl:'views/team/team_bowl_1.html',
                    controller:'team_bowl_1'
                }
                
            }
        })
    
        .state('home.player',{
        
            url:'/player/:country/:player',
            views:{
                'content@':{
                    templateUrl:'views/player.html',
                    controller:'mapPlayer'
                },
                'info@home.player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@home.player':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
                },
                'playerList@home.player':{
                    templateUrl:'views/player/playerList.html',
                    controller:'playerList'
                }
            }
        })
        
    .state('home.player.player_bat_2',{
        url:'/2',
        views:{
            'graph@home.player':{
                templateUrl:'views/player/player_bat_2.html',
                controller:'player_bat_2'
            }
            
        }
    })
    .state('home.player.player_bat_1',{
        url:'/0',
        views:{
            'graph@home.player':{
                templateUrl:'views/player/player_bat_1.html',
                controller:'player_bat_1'
            }
            
        }
    })
    .state('home.player.player_bowl_1',{
        url:'/1',
        views:{
            'graph@home.player':{
                templateUrl:'views/player/player_bowl_1.html',
                controller:'player_bowl_1'
            }
            
        }
    })
        
    
    
    
    $urlRouterProvider.otherwise('/home');
    
    
    
    })