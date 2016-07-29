angular.module('cricket',['ui.router','iso-3166-country-codes','ngCookies',"highcharts-ng"])
 
 .config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
        .state('home',{
            url:'/home',
            views:{
                'header':{
                    templateUrl:'views/home_header.html',

                },
                'content':{
                    templateUrl:'views/home.html',
                    controller:'home'
                }
            }
        })
    
        .state('team',{
            url:'/team',
            views:{
                'header':{
                    templateUrl:'views/header.html',

                },
                'content@':{
                    templateUrl:'views/team.html',
                   
                },
                'info@team':{
                    templateUrl:'views/team/info.html',
                    controller:'info'
                },
                'graph@team':{
                    templateUrl:'views/team/team_bat_1.html'
                    //controller:'team_bat_1'
                }
                
            }
        
        })
    
       .state('team.team_bat_1',{
            url:"/1",
            views:{
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
     .state('team.team_bat_2',{
            
            url:'/2',
            views:{
                'info@team':{
                        templateUrl:'views/team/info.html',
                        controller:'info'
                    },
                'graph@team':{
                        templateUrl:'views/team/team_bat_2.html',
                        controller:'team_bat_2'
                 }
            }
        })
     .state('team.team_bat_3',{
            
            url:'/3',
            views:{
                'info@team':{
                        templateUrl:'views/team/info.html',
                        controller:'info'
                    },
                'graph@team':{
                        templateUrl:'views/team/team_bat_3.html',
                        controller:'team_bat_3'
                }
            }
        })
     .state('team.team_bowl_1',{
           
            url:'/4',
            views:{
                'info@team':{
                        templateUrl:'views/team/info.html',
                        controller:'info'
                    },
                'graph@team':{
                        templateUrl:'views/team/team_bowl_1.html',
                        controller:'team_bowl_1'
                 }
            }    
        })
    
    
     $urlRouterProvider.otherwise('/home');
    
    })