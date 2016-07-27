angular.module('cricket',['ui.router','iso-3166-country-codes','ngCookies'])
 
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
    
    
        .state('team',{
            url:'/team',
            views:{
               'header@':{
                    templateUrl:'views/header.html'
                   
                },
                'content@':{
                     templateUrl:'views/team.html',
                     controller:'mapTeam'
                 },
                'info@team':{
                    templateUrl:'views/team/info.html',
                    controller:'info'
                },
                'graph@team':{
                    templateUrl:'views/team/team_bat_1.html',
                    controller:'team_bat_1'
                }
                
            }
        })
    
         .state('team.team_bat_1',{
            url:'/0',
            views:{
               
                'graph@team':{
                    templateUrl:'views/team/team_bat_1.html',
                    controller:'team_bat_1'
                }
                
            }
        })
        .state('team.team_bat_2',{
            url:'/1',
            views:{
               
                'graph@team':{
                    templateUrl:'views/team/team_bat_2.html',
                    controller:'team_bat_2'
                }
                
            }
        })
        .state('team.team_bat_3',{
            url:'/2',
            views:{
               
                'graph@team':{
                    templateUrl:'views/team/team_bat_3.html',
                    controller:'team_bat_3'
                }
                
            }
        })
        .state('team.team_bowl_1',{
            url:'/3',
            views:{
               
                'graph@team':{
                    templateUrl:'views/team/team_bowl_1.html',
                    controller:'team_bowl_1'
                }
                
            }
        })
    
        .state('player',{
        
            url:'/player',
            views:{
                
              'header@':{
                    templateUrl:'views/header.html'
                   
                },
                
                'content@':{
                    templateUrl:'views/player.html',
                    controller:'mapPlayer'
                },
                'info@player':{
                    templateUrl:'views/player/info.html',
                    controller:'infoPlayer'
                },
                'graph@player':{
                    templateUrl:'views/player/player_bat_1.html',
                    controller:'player_bat_1'
                },
                'playerList@player':{
                    templateUrl:'views/player/playerList.html',
                    controller:'playerList'
                }
            }
        })
        
    .state('player.player_bat_2',{
        url:'/2',
        views:{
            'graph@player':{
                templateUrl:'views/player/player_bat_2.html',
                controller:'player_bat_2'
            }
            
        }
    })
    .state('player.player_bat_1',{
        url:'/0',
        views:{
            'graph@player':{
                templateUrl:'views/player/player_bat_1.html',
                controller:'player_bat_1'
            }
            
        }
    })
    .state('player.player_bowl_1',{
        url:'/1',
        views:{
            'graph@player':{
                templateUrl:'views/player/player_bowl_1.html',
                controller:'player_bowl_1'
            }
            
        }
    })
        
    
    
    
    $urlRouterProvider.otherwise('/home');
    
    
    
    })